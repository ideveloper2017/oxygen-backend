import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constants';
import { AuthService } from '../../service/auth.service';
import { AuthController } from '../../controller/auth/auth.controller';


@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
