import { ApiProperty } from "@nestjs/swagger";
import { TruckType } from "@prisma/client";
import { IsNumber, IsNotEmpty, IsString, IsEnum } from "class-validator";

export class CreateTruckDto {
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    truckId:number;

    @ApiProperty({example:'Truck name'})
    @IsString()
    @IsNotEmpty()
    truckName: string;

    @ApiProperty({example:'Truck type  SMALL| LARGE | MEDIUM'})
    @IsNotEmpty()
    @IsEnum(TruckType)
    truckType:TruckType;

    @ApiProperty({example:'Registration Number..'})
    @IsString()
    @IsNotEmpty()
    registrationNumber: string;

    @ApiProperty({example:'dimention of your truck  E.g if truck type is small (6m X 2m X 2M)  '})
    @IsString()
    @IsNotEmpty()
    dimension: string
}