import { Injectable } from '@nestjs/common';
import { CreateFactoryOwnerDto } from './dto/create-factory-owner.dto';
import { UpdateFactoryOwnerDto } from './dto/update-factory-owner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FactoryOwnerService {

  constructor(private prisma: PrismaService){}

  create(createFactoryOwnerDto: CreateFactoryOwnerDto) {
    return this.prisma.factoryOwner.create({
      data:{
        factoryName:createFactoryOwnerDto.factoryName,
        name:createFactoryOwnerDto.name,
        phone:createFactoryOwnerDto.phone,
        tonnage:createFactoryOwnerDto.tonnage,
        factoryAddress:createFactoryOwnerDto.factoryAddress,
        user:{
          create:{
            email:createFactoryOwnerDto.user.email,
            password:createFactoryOwnerDto.user.password,
            role:createFactoryOwnerDto.user.role
          }
        },
        truckRequests:{
          create:{
            pickUpTime:createFactoryOwnerDto.truckRequests.pickUpTime,
            bidEndTime:createFactoryOwnerDto.truckRequests.bidEndTime,
            tonnage   :createFactoryOwnerDto.truckRequests.tonnage,
            isActive  :createFactoryOwnerDto.truckRequests.isActive,
            truckPickupLocations:{
              create:{
                latitude:createFactoryOwnerDto.truckRequests.truckPickupLocations.latitude,
                longitude:createFactoryOwnerDto.truckRequests.truckPickupLocations.longitude
              }
            },
            truckDropoffLocations:{
              create:{
                latitude:createFactoryOwnerDto.truckRequests.truckDropoffLocations.latitude,
                longitude:createFactoryOwnerDto.truckRequests.truckDropoffLocations.longitude
              }
            },
            truckType:createFactoryOwnerDto.truckRequests.truckType

          }
        },
        

      },
    });
  }

  findAll() {
    return this.prisma.factoryOwner.findMany({include:{user:true}});
  }

  findOne(id: number) {
    return this.prisma.factoryOwner.findUnique({
      where:{
        factoryOwnerId:id
      }
    });
  }

  update(id: number, updateFactoryOwnerDto: UpdateFactoryOwnerDto) {
    return this.prisma.factoryOwner.update({
      where:{factoryOwnerId:id},
      data:{
        factoryName:updateFactoryOwnerDto.factoryName,
        name:updateFactoryOwnerDto.name,
        phone:updateFactoryOwnerDto.phone,
        tonnage:updateFactoryOwnerDto.tonnage,
        factoryAddress:updateFactoryOwnerDto.factoryAddress,
        user:{
          update:{
            email:updateFactoryOwnerDto.user.email,
            password:updateFactoryOwnerDto.user.password,
            role:updateFactoryOwnerDto.user.role
          }
        }
      },
    });
  }

  remove(id: number) {
    return this.prisma.factoryOwner.delete({

      include:{
        user:true,
      },

      where:{factoryOwnerId:id},
      
    });
  }
}
