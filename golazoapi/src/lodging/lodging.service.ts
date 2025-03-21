import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LodgingService {
  private readonly logger = new Logger(LodgingService.name);
  private readonly googleApiKey = process.env.GOOGLE_PLACES_API_KEY;
  private readonly baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  async getLodgingNearby(location: string, radius: number = 5000) {
    try {
      this.logger.log(`Buscando hospedajes cerca de: ${location}...`);

      const response = await axios.get(this.baseUrl, {
        params: {
          location, // Coordenadas lat,lng
          radius, // Radio de búsqueda en metros (5000m = 5km)
          type: 'lodging', // Solo hospedajes
          key: this.googleApiKey,
        },
      });

      const hotels = response.data.results.map(hotel => ({
        name: hotel.name,
        address: hotel.vicinity,
        rating: hotel.rating ?? 'Sin calificación',
        total_ratings: hotel.user_ratings_total ?? 0,
        location: hotel.geometry.location,
        photo: hotel.photos?.[0]?.photo_reference 
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photos[0].photo_reference}&key=${this.googleApiKey}`
          : 'No disponible',
      }));

      return hotels;
    } catch (error) {
      this.logger.error('Error al obtener hospedajes:', error.message);
      throw new Error('Error al obtener hospedajes.');
    }
  }
}
