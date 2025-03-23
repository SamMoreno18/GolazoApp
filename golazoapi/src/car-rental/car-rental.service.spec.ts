import { Test, TestingModule } from '@nestjs/testing';
import { CarRentalService } from './car-rental.service';

describe('CarRentalService', () => {
  let service: CarRentalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarRentalService],
    }).compile();

    service = module.get<CarRentalService>(CarRentalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
