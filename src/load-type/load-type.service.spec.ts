import { Test, TestingModule } from '@nestjs/testing';
import { LoadTypeService } from './load-type.service';

describe('LoadTypeService', () => {
  let service: LoadTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadTypeService],
    }).compile();

    service = module.get<LoadTypeService>(LoadTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
