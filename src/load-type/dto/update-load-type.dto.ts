import { PartialType } from '@nestjs/swagger';
import { CreateLoadTypeDto } from './create-load-type.dto';

export class UpdateLoadTypeDto extends PartialType(CreateLoadTypeDto) {}
