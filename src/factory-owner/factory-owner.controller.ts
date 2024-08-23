import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactoryOwnerService } from './factory-owner.service';
import { CreateFactoryOwnerDto } from './dto/create-factory-owner.dto';
import { UpdateFactoryOwnerDto } from './dto/update-factory-owner.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('factory-owner')
@ApiTags('Factory Owner')
export class FactoryOwnerController {
  constructor(private readonly factoryOwnerService: FactoryOwnerService) {}

  @Post()
  create(@Body() createFactoryOwnerDto: CreateFactoryOwnerDto) {
    return this.factoryOwnerService.create(createFactoryOwnerDto);
  }

  @Get()
  findAll() {
    return this.factoryOwnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoryOwnerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoryOwnerDto: UpdateFactoryOwnerDto) {
    return this.factoryOwnerService.update(+id, updateFactoryOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoryOwnerService.remove(+id);
  }
}
