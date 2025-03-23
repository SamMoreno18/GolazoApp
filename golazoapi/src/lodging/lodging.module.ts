import { Module } from '@nestjs/common';
import { LodgingService } from './lodging.service';
import { LodgingController } from './lodging.controller';

@Module({
  providers: [LodgingService],
  controllers: [LodgingController]
})
export class LodgingModule {}
