import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { userCredentialsDto } from 'src/dto/userCredentials.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    //Log-in users using email and password
    @Get('login')
    async user_login(@Body() credentials: userCredentialsDto){
        if (!Body){
            throw new HttpException('No credentials input', HttpStatus.BAD_REQUEST);
        }
        
        if (await this.userService.validateLogin(credentials)){
            //Change for session creation
            return "Login successful";
        }
        else {
            return "Incorrect password"
        }
    }

    //Used to validate e-mails from tokens
    @Get('validate')
    async validateUser(@Query('token') token: string){
        if (!token){
            throw new HttpException('No token input', HttpStatus.BAD_REQUEST);
        }
        
        if (await this.userService.updateUserValid(token)){
            return 'E-mail validated successfully'
        }
        else{
            throw new HttpException('Token or account not found', HttpStatus.NOT_FOUND);
        }
    }
    
    //Create user accounts
    @Post()
    async createUser(@Body() userData: CreateUserDto){
        //Validate e-mail input
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData._id)){
            if (await this.userService.getUser(userData._id)) {
                throw new HttpException("E-mail already exists", HttpStatus.CONFLICT);
            }

            const sent = await this.userService.sendValidationMail(userData._id);
            if (sent){
                //Create new user and await validation
                this.userService.create(userData);
                return 'Validation e-mail sent'
            }
            else {
                throw new HttpException("Couldn't send validation E-mail", HttpStatus.BAD_GATEWAY);
            }
        }
        else{
            throw new HttpException('Invalid E-mail', HttpStatus.BAD_REQUEST);
        }
    }
}
