import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreatebidsDto {
    
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    brokeId?:number;

    @ApiProperty()
    @IsNumber()
    bidAmount:number;




}
