import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import * as jwt from 'jwt-simple';
import 'dotenv/config';
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/user.schema";
import { Model } from "mongoose";

//Checks the provided authorization token to authorize logged users
@Injectable()
export class JWTAuthorize implements NestMiddleware{

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async use(req: Request, res: Response, next: NextFunction){
        const JWT = req.headers['authorization'];
        if (!JWT){
            throw new HttpException('No authorization provided', HttpStatus.FORBIDDEN);
        }

        const split = JWT.split(" ", 2);
        if (split[0] != "Bearer"){
            throw new HttpException('Invalid authentication method', HttpStatus.BAD_REQUEST);
        }
        
        try {
            const decoded = jwt.decode(split[1], process.env.JWTSECRET);

            //Allow 1 month old tokens
            if (decoded.creationDate + 2592000000 < Date.now()){
                throw new HttpException('Expired token', HttpStatus.FORBIDDEN);
            }

            const user = await this.userModel.findById(decoded.id).exec();
            if (!user){
                throw new HttpException("User doesn't exist", HttpStatus.FORBIDDEN);
            }

            next();
        }

        catch {
            throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
        }
    }
}