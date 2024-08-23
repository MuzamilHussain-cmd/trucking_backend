import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateLoadTypeDto {
      
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    factoryOwnerId?:number;

    @ApiProperty({example:'Enter Your Load Name'})
    @IsString()
    @IsNotEmpty()
    name:string;
}
