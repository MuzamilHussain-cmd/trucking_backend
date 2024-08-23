import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { BrokerModule } from './broker/broker.module';
import { BidsModule } from './bids/bids.module';
import { LoadTypeModule } from './load-type/load-type.module';
import { TruckRequestModule } from './truck-request/truck-request.module';
import { LocationModule } from './location/location.module';
import { FactoryOwnerModule } from './factory-owner/factory-owner.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    AdminModule, 
    BrokerModule, 
    BidsModule, 
    LoadTypeModule, 
    TruckRequestModule, 
    LocationModule, 
    FactoryOwnerModule, 
    AuthModule, 
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
