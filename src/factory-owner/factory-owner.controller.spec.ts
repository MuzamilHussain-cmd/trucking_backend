import { Test, TestingModule } from '@nestjs/testing';
import { FactoryOwnerController } from './factory-owner.controller';
import { FactoryOwnerService } from './factory-owner.service';

describe('FactoryOwnerController', () => {
  let controller: FactoryOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoryOwnerController],
      providers: [FactoryOwnerService],
    }).compile();

    controller = module.get<FactoryOwnerController>(FactoryOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
