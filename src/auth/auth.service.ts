import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtservice: JwtService,
  ) {}

  async Login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.truckingUser.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new NotFoundException(`no user found of this Email:${email}`);
    }

    const IsPasswordValid = await bcrypt.compare(password,user.password);

    if (!IsPasswordValid) {
      throw new UnauthorizedException(`invalid Password`);
    }

    return {
      accessToken: this.jwtservice.sign({ userId : user.userId }),
    };
  }
}
