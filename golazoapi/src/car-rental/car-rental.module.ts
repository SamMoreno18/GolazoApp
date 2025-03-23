import { Module } from '@nestjs/common';
import { CarRentalService } from './car-rental.service';
import { CarRentalController } from './car-rental.controller';

@Module({
  controllers: [CarRentalController],
  providers: [CarRentalService],
})
export class CarRentalModule {}
