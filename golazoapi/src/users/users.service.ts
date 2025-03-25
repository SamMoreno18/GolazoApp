import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { transporter } from 'SMTP/transport';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';
import { validationToken } from 'src/schemas/validationToken.schema';
import * as bcrypt from "bcryptjs";
import { userCredentialsDto } from 'src/dto/userCredentials.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(validationToken.name) private validationTModel: Model<validationToken>) {}

    //Add new user to database
    async create(userDto: CreateUserDto): Promise<User> {
        //Password encryption, current salt is 10 characters
        const hashedPass = await bcrypt.hash(userDto.password, 10);

        const newUser = new this.userModel({
            _id: userDto._id,
            name: userDto.name,
            password: hashedPass,
            validated: false,
            creationDate: Date.now()
        });
        return newUser.save();
    }

    async getUser(email){
        return await this.userModel.findById(email).exec();
    }

    //Send the e-mail to validate new user registration
    async sendValidationMail(mail): Promise<boolean>{
        const token = uuidv4();
        const link = process.env.DOMAIN + "/users/validate?token=" + token

        const info = await transporter.sendMail({
            from: '"Golazo App" <' + process.env.SMTPUSER + '>',
            to: mail,
            subject: "Valida tu correo",
            text: "",
            html: "<h1>Bienvenido/a a Golazo App, la mejor aplicación de fútbol</h1><br><a href='" + link + "'>Verificar</a>",
        });

        //Check if the e-mail could be sent
        if (info.accepted.length > 0){
            //Add the pending validation token to the table
            await new this.validationTModel({
                _id: token,
                email: mail
            }).save();

            return true;
        }
        else {
            return false;
        }
    }

    //Change the validated attribute of the account with the token
    async updateUserValid(token): Promise<boolean>{
        //Check email of the token
        const item = await this.validationTModel.findById(token).exec();
        
        //Update validated state of the account
        const updated = await this.userModel.updateOne({_id: item?.email}, {validated: true}).exec();

        if (updated){
            this.validationTModel.deleteMany({email: item?.email}).exec();
            return updated.acknowledged;
        }
        else{
            return false;
        }
    }

    //Validate the input credentials
    async validateLogin(credentials: userCredentialsDto): Promise<boolean>{
        const account = await this.userModel.findById(credentials.email).exec();

        if (account){
            //True if passwords match
            return bcrypt.compare(credentials.password, account.password);
        }
        else {
            return false
        }
    } 
}
