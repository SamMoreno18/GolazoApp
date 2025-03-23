import { Injectable } from '@nestjs/common';

@Injectable()
export class CarRentalService {
  private readonly carRentalLocations = [
    {
      city: "Ciudad de México",
      country: "México",
      rentals: [
        { name: "Hertz México", website: "https://www.hertz.com.mx" },
        { name: "Avis México", website: "https://www.avis.mx" }
      ]
    },
    {
      city: "Guadalajara",
      country: "México",
      rentals: [
        { name: "Europcar México", website: "https://www.europcar.com.mx" },
        { name: "Sixt México", website: "https://www.sixt.com.mx" }
      ]
    },
    {
      city: "Toronto",
      country: "Canadá",
      rentals: [
        { name: "Enterprise Rent-A-Car", website: "https://www.enterprise.ca" },
        { name: "Budget Car Rental", website: "https://www.budget.ca" }
      ]
    }
  ];

  getCarRentals(cityName: string) {
    const cityInfo = this.carRentalLocations.find(
      city => city.city.toLowerCase() === cityName.toLowerCase()
    );
    return cityInfo ? cityInfo.rentals : `No hay información de alquiler de autos para ${cityName}.`;
  }
}
