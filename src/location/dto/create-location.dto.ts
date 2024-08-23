import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsNotEmpty } from "class-validator";

export class CreateLocationDto {
    
    @ApiProperty({example:'25.66854'})
    @IsDecimal()
    @IsNotEmpty()
    latitude:Decimal;

    @ApiProperty({example:'8005.66854'})
    @IsDecimal()
    @IsNotEmpty()
    longitude:Decimal;
}
