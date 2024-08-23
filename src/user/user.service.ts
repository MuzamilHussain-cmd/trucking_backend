import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundOfHasing = 10;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundOfHasing,
    );
    createUserDto.password = hashedPassword;

    return this.prisma.truckingUser.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.truckingUser.findMany();
  }

  findOne(id: number) {
    if (!id) {
      throw new Error('id must be provided');
    }
    return this.prisma.truckingUser.findUnique({
      where: {
        userId: id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundOfHasing,
      );
    }

    return await this.prisma.truckingUser.update({
      where: { userId: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.truckingUser.delete({ where: { userId: id } });
  }
}
