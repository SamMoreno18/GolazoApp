import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { Match } from './match.interface';

@Injectable()
export class ResultsService {
  private readonly apiKey = process.env.API_FOOTBALL_KEY;
  private readonly baseUrl = 'https://v3.football.api-sports.io';
  private readonly logger = new Logger(ResultsService.name);

  private liveMatches: Match[] = []; // ✅ Asegura que la variable usa el tipo correcto

  // 🔄 🔥 Actualiza los datos cada 5 minutos
  @Cron('*/5 * * * *') 
  async updateLiveMatches() {
    try {
      this.logger.log('⏳ Actualizando partidos en vivo...');
      
      const response = await axios.get(`${this.baseUrl}/fixtures?live=all`, {
        headers: { 'x-apisports-key': this.apiKey },
      });

      this.liveMatches = response.data.response as Match[]; // ✅ Le decimos a TypeScript que estos datos cumplen con la interfaz Match
      this.logger.log(`✅ Se actualizaron ${this.liveMatches.length} partidos en vivo.`);
    } catch (error) {
      this.logger.error('❌ Error al actualizar los partidos:', error.message);
    }
  }

  // ⚽ Retorna los partidos actualizados sin hacer otra llamada a la API
  getLiveMatches() {
    if (this.liveMatches.length === 0) {
      return { message: 'No hay partidos en vivo en este momento.' };
    }

    return this.liveMatches.map((match: Match) => ({
        date: match.fixture.date ?? 'Fecha no disponible',
        stadium: match.fixture.venue?.name ?? 'Desconocido',
        city: match.fixture.venue?.city ?? 'Desconocida',
        status: match.status?.long 
          ? match.status.long 
          : match.status?.short === '1H' || match.status?.short === '2H' 
            ? 'En Vivo' 
            : 'Programado',
        teams: {
          home: {
            name: match.teams.home?.name ?? 'Desconocido',
            logo: match.teams.home?.logo ?? '',
            score: match.goals.home ?? 0,
          },
          away: {
            name: match.teams.away?.name ?? 'Desconocido',
            logo: match.teams.away?.logo ?? '',
            score: match.goals.away ?? 0,
          },
        },
        elapsed: match.status?.elapsed ? `${match.status.elapsed} min` : 'No iniciado',
      }));
    }}      
