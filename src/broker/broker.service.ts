import { Injectable } from '@nestjs/common';
import { CreateBrokerDto } from './dto/create-broker.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateBrokerDto } from './dto/update-broker.dto';

@Injectable()
export class BrokerService {
  constructor(private prisma: PrismaService) {}

  async create(createBrokerDto: CreateBrokerDto) {
    return await this.prisma.broker.create({
      data: {
        name: createBrokerDto.name,
        phone: createBrokerDto.phone,
        address: createBrokerDto.address,
        region: createBrokerDto.region,
        user: {
          create: {
            email: createBrokerDto.user.email,
            password: createBrokerDto.user.password,
            role: createBrokerDto.user.role,
          },
        },
        trucks: {
          createMany: {
            data: createBrokerDto.trucks.map((truck) => ({
              truckName: truck.truckName,
              truckType: truck.truckType,
              registrationNumber: truck.registrationNumber,
              dimension: truck.dimension,
            })),
          },
        },
      },
    });
  }

  async update(id: number, updateBrokerDto: UpdateBrokerDto) {
    return await this.prisma.broker.upsert({
      where: {
        brokerId: id,
      },
      create: {
        name: updateBrokerDto.name,
        phone: updateBrokerDto.phone,
        address: updateBrokerDto.address,
        region: updateBrokerDto.region,
        user: {
          create: {
            email: updateBrokerDto.user.email,
            password: updateBrokerDto.user.password,
            role: updateBrokerDto.user.role,
          },
        },
        trucks: {
          createMany: {
            data: updateBrokerDto.trucks.map((truck) => ({
              truckName: truck.truckName,
              truckType: truck.truckType,
              registrationNumber: truck.registrationNumber,
              dimension: truck.dimension,
            })),
          },
        },
      },
      update: {
        name: updateBrokerDto.name,
        phone: updateBrokerDto.phone,
        address: updateBrokerDto.address,
        region: updateBrokerDto.region,
        user: {
          update: {
            email: updateBrokerDto.user.email,
            password: updateBrokerDto.user.password,
            role: updateBrokerDto.user.role,
          },
        },
        trucks: {
          updateMany: updateBrokerDto.trucks.map((truck) => ({
            where: { truckId: truck.truckId },
            data: {
              truckName: truck.truckName,
              truckType: truck.truckType,
              registrationNumber: truck.registrationNumber,
              dimension: truck.dimension,
            },
          })),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.broker.findMany({
      include: {
        user: true,
        bids: true,
        trucks: true,
      },
    });
  }

  async findOne(brokerId: number) {
    return await this.prisma.broker.findUnique({
      where: {
        brokerId,
      },
      include: {
        user: true,
        bids: true,
        trucks: true,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.broker.delete({
      where: {
        brokerId: id,
      },
      include: {
        user: true,
        trucks: true,
        bids: true,
      },
    });
  }
}
