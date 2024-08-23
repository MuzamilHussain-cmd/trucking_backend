import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateLoadTypeDto } from "src/load-type/dto/create-load-type.dto";
import { CreateLocationDto } from "src/location/dto/create-location.dto";
import { CreateTruckRequestDto } from "src/truck-request/dto/create-truck-request.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateFactoryOwnerDto {
    
    @ApiProperty({example:'Sadam'})
    @IsString()
    @IsNotEmpty()
    name:string;
    
    @ApiProperty({example:'030000002'})
    @IsString()
    @IsNotEmpty()
    phone:string;

    @ApiProperty({example:'CWI'})
    @IsString()
    @IsNotEmpty()
    factoryName:string

    @ApiProperty({ description: 'cxvcvz' })
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto

    @ApiProperty({example:'795'})
    @IsNotEmpty()
    @IsNumber()
    tonnage:number;

    @ApiProperty({example:'#45 ,Iraq'})
    @IsString()
    @IsNotEmpty()
    factoryAddress:string

    @ApiProperty({description:'your Truck Request'})
    @ValidateNested()
    @Type(()=>CreateTruckRequestDto)
    truckRequests:CreateTruckRequestDto;

    @ApiProperty({
        type:CreateLoadTypeDto,
        isArray:true,
    })
    @ValidateNested({each:true})
    @Type(()=>CreateLoadTypeDto)
    loadTypes:CreateLoadTypeDto[] ;

    @ApiProperty({
        type:CreateLocationDto,
        isArray:true,
        description:'list of fatory pick up location '
    })
    @ValidateNested({each:true})
    @Type(()=> CreateLocationDto)
    factoryPickupLocations: CreateLocationDto[]; 
    
    @ApiProperty({
        type:CreateLocationDto,
        isArray:true
    })
    @ValidateNested({each:true})
    @Type(()=>CreateLocationDto)
    factoryDropoffLocations:CreateLocationDto[];
}
