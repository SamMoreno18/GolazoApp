import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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

import { JWTAuthorize } from './middleware/JWTAuthorization.middleware';
import { ResultsController } from './results/results.controller';
import { LodgingController } from './lodging/lodging.controller';
import { MatchesController } from './matches/matches.controller';
import { LocationsController } from './locations/locations.controller';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { TeamModule } from './team/team.module';
import { CarRentalController } from './car-rental/car-rental.controller';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),  // ✅ Configuración de variables de entorno
    MongooseModule.forRoot(process.env.DATABASE), // ✅ Conexión a la base de datos
    ResultsModule,
    ScheduleModule.forRoot(), // ✅ Activamos la funcionalidad de cron jobs
    LodgingModule,
    UsersModule,
    TeamModule,
    MatchesModule,
    LocationsModule,
    RestaurantsModule,
    CarRentalModule,
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]) //For user token authentication
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})

//Require an authorization token for the following controllers
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(JWTAuthorize)
        .forRoutes(
          ResultsController,
          LodgingController,
          MatchesController,
          LocationsController,
          RestaurantsController,
          CarRentalController
        )
  }
}
