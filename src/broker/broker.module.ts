import { Module } from '@nestjs/common';
import { BrokerService } from './broker.service';
import { BrokerController } from './broker.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BrokerController],
  imports: [PrismaModule],  
  providers: [BrokerService], 
  exports: [BrokerService],
})
export class BrokerModule {}
