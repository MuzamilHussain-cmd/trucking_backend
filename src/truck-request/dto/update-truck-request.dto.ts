import { PartialType } from '@nestjs/swagger';
import { CreateTruckRequestDto } from './create-truck-request.dto';

export class UpdateTruckRequestDto extends PartialType(CreateTruckRequestDto) {}
