import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';

@Module({
  providers: [TeamService],
  controllers: [TeamController],
  exports: [TeamService], // Permite que otros módulos usen TeamService si es necesario
})
export class TeamModule {}
