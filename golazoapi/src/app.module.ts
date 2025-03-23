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
import 'dotenv/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),  // ✅ Configuración de variables de entorno
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
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
