import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatchesModule } from './matches/matches.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [UsersModule, MatchesModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
