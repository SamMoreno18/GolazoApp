import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { LeagueService } from './league.service';

@Controller('leagues')
export class LeagueController {
    constructor(private readonly leagueService: LeagueService) {}

    @Get()
    async getLeagues(@Query('name') name?: string) {
        if (!name) {
            throw new HttpException('League name is required', HttpStatus.BAD_REQUEST);
        }

        return await this.leagueService.getLeaguesByName(name);
    }
}
