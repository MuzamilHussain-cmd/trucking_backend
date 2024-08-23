import { Module } from '@nestjs/common';
import { LoadTypeService } from './load-type.service';
import { LoadTypeController } from './load-type.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [LoadTypeController],
  providers: [LoadTypeService],
})
export class LoadTypeModule {}
