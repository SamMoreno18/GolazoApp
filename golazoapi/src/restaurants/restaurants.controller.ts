import { Controller, Get } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Get()
    async getRestaurants() {
        return await this.restaurantsService.getRestaurants();
    }
}
