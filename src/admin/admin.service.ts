import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TruckingUserRole } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(
    createAdminDto: CreateAdminDto,
    role: TruckingUserRole = 'ADMIN',
  ) {
    return await this.prisma.admin.create({
      data: {
        name: createAdminDto.name,
        phone: createAdminDto.phone,
        user: {
          create: {
            email: createAdminDto.user.email,
            password: createAdminDto.user.password,
            role,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.admin.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.admin.findUnique({
      where: { adminId: id },
      include: {
        user: true,
      },
    });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.prisma.admin.update({
      where: { adminId: id },
      data: {
        name: updateAdminDto.name,
        phone: updateAdminDto.phone,
        user: {
          update: {
            email: updateAdminDto.user?.email,
            password: updateAdminDto.user?.password,
            role: updateAdminDto.user?.role,
          },
        },
      },
      include: {
        user: true,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.admin.delete({
      where: { adminId: id },
    });
  }
}
