import { Controller, Get, Query } from '@nestjs/common';
import { LodgingService } from './lodging.service';

@Controller('lodging')
export class LodgingController {
  constructor(private readonly lodgingService: LodgingService) {}

  @Get('nearby')
  async getLodgingNearby(
    @Query('lat') lat: string,
    @Query('lng') lng: string,
    @Query('radius') radius?: string,
  ) {
    if (!lat || !lng) {
      return { error: 'Se requieren las coordenadas lat y lng' };
    }

    const location = `${lat},${lng}`;
    return this.lodgingService.getLodgingNearby(location, radius ? parseInt(radius) : 5000);
  }
}
