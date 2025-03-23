import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  // ✅ Importa ConfigModule correctamente
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule'; // ✅ Importamos ScheduleModule

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatchesModule } from './matches/matches.module';
import { LocationsModule } from './locations/locations.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { CarRentalModule } from './car-rental/car-rental.module';
import { ResultsModule } from './results/results.module';
import { LodgingModule } from './lodging/lodging.module';

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

@Module({
  imports: [
    ConfigModule.forRoot(),  // ✅ Configuración de variables de entorno
    MongooseModule.forRoot(process.env.DATABASE), // ✅ Conexión a la base de datos
    ResultsModule,
    ScheduleModule.forRoot(), // ✅ Activamos la funcionalidad de cron jobs
    LodgingModule,
    UsersModule,
    MatchesModule,
    LocationsModule,
    RestaurantsModule,
    CarRentalModule,
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
