import { Test, TestingModule } from '@nestjs/testing';
import { TruckRequestController } from './truck-request.controller';
import { TruckRequestService } from './truck-request.service';

describe('TruckRequestController', () => {
  let controller: TruckRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TruckRequestController],
      providers: [TruckRequestService],
    }).compile();

    controller = module.get<TruckRequestController>(TruckRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
