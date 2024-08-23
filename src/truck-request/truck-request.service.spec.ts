import { Test, TestingModule } from '@nestjs/testing';
import { TruckRequestService } from './truck-request.service';

describe('TruckRequestService', () => {
  let service: TruckRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TruckRequestService],
    }).compile();

    service = module.get<TruckRequestService>(TruckRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
