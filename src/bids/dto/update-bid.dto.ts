import { PartialType } from '@nestjs/swagger';
import { CreatebidsDto } from './create-bid.dto';

export class UpdateBidDto extends PartialType(CreatebidsDto) {}
