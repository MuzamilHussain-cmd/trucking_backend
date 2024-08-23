import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email:string;


    @IsNotEmpty()
    @ApiProperty()
    @MinLength(6)
    @IsString()
    password:string;

}