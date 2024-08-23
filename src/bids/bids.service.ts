import { Injectable } from '@nestjs/common';
import { UpdateBidDto } from './dto/update-bid.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatebidsDto } from './dto/create-bid.dto';

@Injectable()
export class BidsService {
  constructor(private prisma: PrismaService) {}

  async create(createBidDto: CreatebidsDto) {
    return await this.prisma.bid.create({
      data: {
        bidAmount: createBidDto.bidAmount,
      },
    });
    // return `this wll create bid of this brokerid ${id}`;
  }

  async findAll() {
    return await this.prisma.bid.findMany();
    //return `This action returns all bids`;
  }

  async findOne(id: number) {
    return await this.prisma.bid.findUnique({ where: { bidId: id } });
    //return `This action returns a #${id} bid`;
  }

  async update(id: number, updateBidDto: UpdateBidDto) {
    return await this.prisma.bid.update({
      where: { bidId: id },
      data: updateBidDto,
    });
    //return `This action updates a #${id} bid`;
  }

  async remove(id: number) {
    return await this.prisma.bid.delete({ where: { bidId: id } });
    // return `This action removes a #${id} bid`;
  }
}
