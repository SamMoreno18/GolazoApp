import { Test, TestingModule } from '@nestjs/testing';
import { LodgingService } from './lodging.service';

describe('LodgingService', () => {
  let service: LodgingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LodgingService],
    }).compile();

    service = module.get<LodgingService>(LodgingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
