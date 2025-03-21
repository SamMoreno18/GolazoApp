import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  // ✅ Importa ConfigModule correctamente

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { LodgingController } from './lodging/lodging.controller';
import { LodgingService } from './lodging/lodging.service';
import { TransportController } from './transport/transport.controller';
import { TransportService } from './transport/transport.service';
import { FoodController } from './food/food.controller';
import { FoodService } from './food/food.service';
import { ResultsController } from './results/results.controller';
import { ResultsService } from './results/results.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ResultsModule } from './results/results.module';
import { ScheduleModule } from '@nestjs/schedule'; // ✅ Importamos ScheduleModule
import { LodgingModule } from './lodging/lodging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),  // ✅ Debe estar dentro de imports
    ResultsModule,
    ScheduleModule.forRoot(),
    LodgingModule, // ✅ Activamos la funcionalidad de cron jobs
  ],
  controllers: [
    AppController,
    MatchesController,
    WeatherController,
    LodgingController,
    TransportController,
    FoodController,
    ResultsController,
    UsersController,
  ],
  providers: [
    AppService,
    MatchesService,
    WeatherService,
    LodgingService,
    TransportService,
    FoodService,
    ResultsService,
    UsersService,
  ],
})
export class AppModule {}
