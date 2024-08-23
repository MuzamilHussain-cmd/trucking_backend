import { Test, TestingModule } from '@nestjs/testing';
import { LoadTypeController } from './load-type.controller';
import { LoadTypeService } from './load-type.service';

describe('LoadTypeController', () => {
  let controller: LoadTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadTypeController],
      providers: [LoadTypeService],
    }).compile();

    controller = module.get<LoadTypeController>(LoadTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
