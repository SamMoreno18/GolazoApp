import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class TeamService {
    private readonly API_URL = 'https://www.thesportsdb.com/api/v1/json/3';

    async getTeamsByName(name: string, lang: string = 'en') {
        const response = await fetch(`${this.API_URL}/searchteams.php?t=${name}`);
        if (!response.ok) {
            throw new HttpException('Error fetching teams', HttpStatus.BAD_GATEWAY);
        }

        const data = await response.json();
        if (!data.teams) {
            throw new HttpException('Team not found', HttpStatus.NOT_FOUND);
        }

        return data.teams.map(team => ({
            name: team.strTeam,
            country: team.strCountry,
            stadium: team.strStadium,
            league: team.strLeague,
            founded: team.intFormedYear,
            description: this.getDescriptionInLanguage(team, lang),
            website: team.strWebsite ? `https://${team.strWebsite}` : 'No website available',
            badge: team.strTeamBadge,
            social: {
                facebook: team.strFacebook ? `https://${team.strFacebook}` : 'No Facebook available',
                twitter: team.strTwitter ? `https://${team.strTwitter}` : 'No Twitter available',
                instagram: team.strInstagram ? `https://${team.strInstagram}` : 'No Instagram available',
            }
        }));
    }

    private getDescriptionInLanguage(team: any, lang: string): string {
        const langKey = `strDescription${lang.toUpperCase()}`;
        return team[langKey] || team.strDescriptionEN || 'No description available';
    }
}
