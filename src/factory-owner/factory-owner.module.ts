import { Module } from '@nestjs/common';
import { FactoryOwnerService } from './factory-owner.service';
import { FactoryOwnerController } from './factory-owner.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [FactoryOwnerController],
  providers: [FactoryOwnerService],
})
export class FactoryOwnerModule {}
