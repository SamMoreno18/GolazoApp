import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) {}

    @Get()
    async getTeams(@Query('name') name?: string, @Query('lang') lang: string = 'en') {
        if (!name) {
            throw new HttpException('Team name is required', HttpStatus.BAD_REQUEST);
        }

        return await this.teamService.getTeamsByName(name, lang);
    }
}
