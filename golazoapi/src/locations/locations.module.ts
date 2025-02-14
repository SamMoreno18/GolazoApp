import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';

@Module({
  providers: [LocationsService],
  controllers: [LocationsController]
})
export class LocationsModule {}
