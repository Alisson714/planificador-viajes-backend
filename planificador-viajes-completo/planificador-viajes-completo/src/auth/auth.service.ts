import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/entities/user.entity';

function cleanUser(user: UserEntity) {
  if (!user) return null;
  const { password, ...rest } = user;
  return rest;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === password) { // En producción usar bcrypt
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserEntity) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: cleanUser(user),
    };
  }

  async register(userData: Partial<UserEntity>) {
    if (!userData.email) {
      throw new BadRequestException('Email is required');
    }
    
    const existingUser = await this.usersService.findByEmail(userData.email);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }
    
    const user = await this.usersService.create(userData);
    return this.login(user);
  }
}