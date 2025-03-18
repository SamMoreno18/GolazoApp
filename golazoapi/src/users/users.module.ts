import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { validationToken, ValTSchema } from 'src/schemas/validationToken.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}, {name: validationToken.name, schema: ValTSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule {}
