import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    //Add new user to database
    async create(userDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }

    async findall(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
