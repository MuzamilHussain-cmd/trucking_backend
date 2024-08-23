import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TruckRequestService } from './truck-request.service';
import { CreateTruckRequestDto } from './dto/create-truck-request.dto';
import { UpdateTruckRequestDto } from './dto/update-truck-request.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('truck-request')
@ApiTags('Truck request')
export class TruckRequestController {
  constructor(private readonly truckRequestService: TruckRequestService) {}

  @Post()
  create(@Body() createTruckRequestDto: CreateTruckRequestDto) {
    return this.truckRequestService.create(createTruckRequestDto);
  }

  @Get()
  findAll() {
    return this.truckRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.truckRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTruckRequestDto: UpdateTruckRequestDto) {
    return this.truckRequestService.update(+id, updateTruckRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.truckRequestService.remove(+id);
  }
}
