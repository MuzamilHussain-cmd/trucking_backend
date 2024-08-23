import { ApiProperty, PartialType } from '@nestjs/swagger';
import { TruckingUserRole} from '@prisma/client';
import { IsEmail } from 'class-validator';

export class CreateUserDto {

  // @ApiProperty()
  // user:TruckingUser

  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'strongpassword' })
  password: string;

  @ApiProperty({example:'your ADMIN | BROKER | FACTORYOWNER'})
  role: TruckingUserRole;
}