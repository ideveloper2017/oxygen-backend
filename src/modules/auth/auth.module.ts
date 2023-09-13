import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../../constants';
import { AuthService } from '../../service/auth.service';
import { AuthController } from '../../controller/auth/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../common/guards/auth/auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../controller/auth/jwt.strategy';

@Module({
  imports: [

    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        expiresIn: '60s',
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
