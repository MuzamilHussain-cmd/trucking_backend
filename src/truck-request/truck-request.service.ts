import { Injectable } from '@nestjs/common';
import { CreateTruckRequestDto } from './dto/create-truck-request.dto';
import { UpdateTruckRequestDto } from './dto/update-truck-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TruckRequestService {
  constructor(private prisma: PrismaService) {}

  async create(createTruckRequestDto: CreateTruckRequestDto) {
    return await this.prisma.truckRequest.create({
      data: {
        pickUpTime: createTruckRequestDto.pickUpTime,
        bidEndTime: createTruckRequestDto.bidEndTime,
        tonnage: createTruckRequestDto.tonnage,
        isActive: createTruckRequestDto.isActive,
        truckPickupLocations: {
          create: createTruckRequestDto.truckPickupLocations,
        },
        truckDropoffLocations: {
          create: createTruckRequestDto.truckDropoffLocations,
        },
        truckType: createTruckRequestDto.truckType,
      },
    });
  }

  async findAll() {
    return await this.prisma.truckRequest.findMany({
      include: {
        truckDropoffLocations: true,
        truckPickupLocations: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.truckRequest.findUnique({
      where: { truckRequestId: id },
    });
  }

  async update(id: number, updateTruckRequestDto: UpdateTruckRequestDto) {
    return await this.prisma.truckRequest.update({
      where: { truckRequestId: id },
      data: {
        pickUpTime: updateTruckRequestDto.pickUpTime,
        bidEndTime: updateTruckRequestDto.bidEndTime,
        tonnage: updateTruckRequestDto.tonnage,
        isActive: updateTruckRequestDto.isActive,
        truckType: updateTruckRequestDto.truckType,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.truckRequest.delete({
      where: { truckRequestId: id },
    });
  }
}
