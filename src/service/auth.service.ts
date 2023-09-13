import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
import { AuthLoginDto } from '../dtos/auth-dto/AuthLoginDto';
import { Users } from '../entity/users.entity';
import { CommonErrors } from '../common/errors/common-erros';

@Injectable()
export class AuthService {
  constructor(
    // private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);
    const payload = { role: user.roles, userId: user.id };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '60s',
      }),
    };
  }

  async getLoggedUser(user: any) {
    const loggedUser = await Users.findOne({
      where: {
        id: user,
      },
    });

    delete loggedUser.password;
    return loggedUser;
  }

  private async validateUser(authLoginDto: AuthLoginDto) {
    const { usernameoremail, password } = authLoginDto;
    const user = await this.findByEmail(authLoginDto.usernameoremail);
    if (!user?.validatePassword(password)) {
      throw new UnauthorizedException(CommonErrors.Unauthorized);
    }
    return user;
  }

  private async findByEmail(usernameoremail: string) {
    return await Users.findOne({
      where: {
        username: usernameoremail,
      },
      //relations:['roles','roles.permission']
    });
  }
}
