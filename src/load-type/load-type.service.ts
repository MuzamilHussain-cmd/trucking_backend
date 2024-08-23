import { Injectable } from '@nestjs/common';
import { CreateLoadTypeDto } from './dto/create-load-type.dto';
import { UpdateLoadTypeDto } from './dto/update-load-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoadTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLoadTypeDto: CreateLoadTypeDto) {
    return await this.prisma.loadType.create({
      data: createLoadTypeDto,
    });
    //return 'This action adds a new loadType';
  }

  async findAll() {
    return await this.prisma.loadType.findMany({});
    //return `This action returns all loadType`;
  }

  async findOne(id: number) {
    return await this.prisma.loadType.findUnique({
      where: { loadTypeId: id },
    });
    //return `This action returns a #${id} loadType`;
  }

  async update(id: number, updateLoadTypeDto: UpdateLoadTypeDto) {
    return await this.prisma.loadType.update({
      where: { loadTypeId: id },
      data: updateLoadTypeDto,
    });
    //return `This action updates a #${id} loadType`;
  }

  async remove(id: number) {
    return await this.prisma.loadType.delete({
      where: {
        loadTypeId: id,
      },
    });
    //return `This action removes a #${id} loadType`;
  }
}
