import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class RestaurantsService {
    private apiUrls = [
        'https://nominatim.openstreetmap.org/search?format=json&q=restaurantes+Monterrey+México',
        'https://nominatim.openstreetmap.org/search?format=json&q=restaurantes+Guadalajara+México',
        'https://nominatim.openstreetmap.org/search?format=json&q=restaurantes+Ciudad+de+México+México'
    ];

    async getRestaurants(): Promise<any[]> {
        try {
            const requests = this.apiUrls.map(url => fetch(url).then(res => res.json() as Promise<any[]>));
            const responses = await Promise.all(requests);

            return responses.flatMap((response) => 
                response.map((restaurant) => ({
                    name: restaurant.name || "Restaurante sin nombre",
                    address: restaurant.display_name,
                    latitude: restaurant.lat,
                    longitude: restaurant.lon
                }))
            );
        } catch (error) {
            console.error('Error fetching restaurant data:', error);
            throw new Error('Failed to fetch restaurant data');
        }
    }
}
