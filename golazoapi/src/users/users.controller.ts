import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers(){
        return this.userService.findall();
    }
    
    @Post()
    createUser(@Body() userData: CreateUserDto){

        //Validate e-mail input
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData._id)){
            this.userService.create(userData);
            return "User created successfully";
        }
        else{
            throw new HttpException('Invalid E-mail', HttpStatus.BAD_REQUEST);
        }
    }
}
