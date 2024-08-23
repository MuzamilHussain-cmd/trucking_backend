import { Module } from '@nestjs/common';
import { TruckRequestService } from './truck-request.service';
import { TruckRequestController } from './truck-request.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [TruckRequestController],
  providers: [TruckRequestService],
})
export class TruckRequestModule {}
