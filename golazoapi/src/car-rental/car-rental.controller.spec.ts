import { Test, TestingModule } from '@nestjs/testing';
import { CarRentalController } from './car-rental.controller';

describe('CarRentalController', () => {
  let controller: CarRentalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarRentalController],
    }).compile();

    controller = module.get<CarRentalController>(CarRentalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
