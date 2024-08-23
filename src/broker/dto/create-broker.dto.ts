import { ApiProperty } from "@nestjs/swagger"
import { Regions, TruckType } from "@prisma/client"
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateTruckDto } from "src/TruckDTO/Creat-truck-Dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateBrokerDto {

    @ApiProperty({example : 'write Your name here'})
    @IsString()
    @IsNotEmpty()
    name:string;
    
    @ApiProperty({example:'your phone number'})
    @IsString()
    @IsNotEmpty()
    phone:string;

    @ApiProperty({example:'your address'})
    @IsString()
    @IsNotEmpty()
    address:string;

    @ApiProperty()
    @ValidateNested()
    @IsNotEmpty()
    user:CreateUserDto;

    @ApiProperty({
        type:CreateTruckDto,
        isArray:true
    })
    @ValidateNested({each:true})
    trucks:CreateTruckDto[];

    @ApiProperty({example :'your region  KARACHI | ISALAMABAD | LAHORE e.t.c'})
    @IsEnum(Regions)
    @IsNotEmpty()
    region:Regions;

}

