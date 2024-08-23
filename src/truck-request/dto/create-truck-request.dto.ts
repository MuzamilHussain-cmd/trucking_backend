import { ApiProperty } from "@nestjs/swagger";
import { TruckType } from "@prisma/client";
import { IsArray, IsBoolean, IsDateString, IsEnum, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateLocationDto } from "src/location/dto/create-location.dto";

export class CreateTruckRequestDto {

    @ApiProperty({example:'Enter Your pick up Time "2024-6-15 "'})
    @IsNotEmpty()
    @IsDateString()
    pickUpTime:number;

    @ApiProperty({example:'Enter Your End of Biding Time "2024-6-15 "'})
    @IsNotEmpty()
    @IsDateString()   
    bidEndTime:number;

    @ApiProperty({example:'Enter Your weight that you can carry'})
    @IsNotEmpty()
    @IsNumber()
    tonnage:number;

    @ApiProperty({example:'Is Active or not'})
    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean;

    @ApiProperty({
        type:CreateLocationDto,
        isArray:true
    })
    @ValidateNested({each:true})
    @IsNotEmpty()
    truckPickupLocations :CreateLocationDto;

    @ApiProperty({
        type:CreateLocationDto,
        isArray:true
    })
    @ValidateNested({each:true})
    @IsNotEmpty()
    truckDropoffLocations :CreateLocationDto;

    @ApiProperty({example:'Enter Your truck Type SMALL | MEDIUM | LARGE'})
    @IsNotEmpty()
    @IsEnum(TruckType)
    truckType:TruckType;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    FactoryOwnerId?:number;

}
