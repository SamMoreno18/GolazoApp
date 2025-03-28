import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class LeagueService {
    private readonly API_URL = 'https://www.thesportsdb.com/api/v1/json/3';

    async getLeaguesByName(name: string) {
        const response = await fetch(`${this.API_URL}/all_leagues.php`);
        if (!response.ok) {
            throw new HttpException('Error fetching leagues', HttpStatus.BAD_GATEWAY);
        }

        const data = await response.json();
        if (!data.leagues) {
            throw new HttpException('No leagues found', HttpStatus.NOT_FOUND);
        }

        // Filtrar las ligas por nombre
        const filteredLeagues = data.leagues.filter(league =>
            league.strLeague.toLowerCase().includes(name.toLowerCase())
        );

        if (filteredLeagues.length === 0) {
            throw new HttpException('League not found', HttpStatus.NOT_FOUND);
        }

        return filteredLeagues.map(league => ({
            id: league.idLeague,
            name: league.strLeague,
            sport: league.strSport,
            country: league.strCountry || 'Unknown',
            logo: league.strBadge || 'No logo available',
            description: league.strDescriptionEN || 'No description available',
            website: league.strWebsite ? `https://${league.strWebsite}` : 'No website available'
        }));
    }
}
