import { PartialType } from '@nestjs/swagger';
import { CreateFactoryOwnerDto } from './create-factory-owner.dto';

export class UpdateFactoryOwnerDto extends PartialType(CreateFactoryOwnerDto) {}
