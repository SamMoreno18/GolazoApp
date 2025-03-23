import { Controller, Get, Param } from '@nestjs/common';
import { CarRentalService } from './car-rental.service';

@Controller('car-rentals')
export class CarRentalController {
  constructor(private readonly carRentalService: CarRentalService) {}

  @Get(':city')
  getCarRentals(@Param('city') city: string) {
    return this.carRentalService.getCarRentals(city);
  }
}
