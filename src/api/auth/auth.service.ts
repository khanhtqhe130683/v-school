import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../../api/user/user.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtPayload } from './payloads/jwt.payload';
import { UserEntity } from '../user/entities/user.entity';
import { RoleService } from '../role/role.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
  ) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findOneByConditions({ username: username }, { role: true });
    if (!user) {
      throw new BadRequestException('User not found, disabled or locked');
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (user && comparePassword) {
      return user;
    }
    return null;
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
    const role = await this.roleService.findOneByCondition({ id: user.role.id });
    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      role: role.name,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
