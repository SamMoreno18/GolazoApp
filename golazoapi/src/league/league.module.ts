import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueController } from './league.controller';

@Module({
  providers: [LeagueService],
  controllers: [LeagueController],
  exports: [LeagueService],
})
export class LeagueModule {}
