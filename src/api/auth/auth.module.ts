import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from '../../configs/constant.config';
import { UserModule } from '../../api/user/user.module';
import { AuthController } from './auth.controller';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT_CONFIG.SECRET,
      signOptions: {
        expiresIn: JWT_CONFIG.EXPIRED_IN,
      },
    }),
    UserModule,
    RoleModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
