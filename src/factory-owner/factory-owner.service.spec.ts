import { Test, TestingModule } from '@nestjs/testing';
import { FactoryOwnerService } from './factory-owner.service';

describe('FactoryOwnerService', () => {
  let service: FactoryOwnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryOwnerService],
    }).compile();

    service = module.get<FactoryOwnerService>(FactoryOwnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
