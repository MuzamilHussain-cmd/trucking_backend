import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoadTypeService } from './load-type.service';
import { CreateLoadTypeDto } from './dto/create-load-type.dto';
import { UpdateLoadTypeDto } from './dto/update-load-type.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('load-type')
@ApiTags('LoadType')
export class LoadTypeController {
  constructor(private readonly loadTypeService: LoadTypeService) {}

  @Post()
  create(@Body() createLoadTypeDto: CreateLoadTypeDto) {
    return this.loadTypeService.create(createLoadTypeDto);
  }

  @Get()
  findAll() {
    return this.loadTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loadTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoadTypeDto: UpdateLoadTypeDto) {
    return this.loadTypeService.update(+id, updateLoadTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loadTypeService.remove(+id);
  }
}
