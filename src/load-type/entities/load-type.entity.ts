import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class LoadType {
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    factoryOwnerId:number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

}
