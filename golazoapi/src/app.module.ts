import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatchesModule } from './matches/matches.module';
import { LocationsModule } from './locations/locations.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [UsersModule, MatchesModule, LocationsModule, MongooseModule.forRoot(process.env.DATABASE)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
