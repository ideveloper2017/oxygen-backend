import {Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';

import { AuthService } from '../../service/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../../dtos/user-dto/create-user.dto';
import { Public } from '../../common/decorators/public.decorator';
import {AuthLoginDto} from "../../dtos/auth-dto/AuthLoginDto";
import {AuthGuard} from "@nestjs/passport";
import {AuthUser} from "../../common/decorators/auth-user.decorator";
import {JwtAuthGuard} from "./jwt-auth.guard";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() signDto: AuthLoginDto) {

    return this.authService.signIn(signDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getLoggedUser(@AuthUser() user: any){
    return this.authService.getLoggedUser(user.userId);
  }

  @Post('register')
  async register(@Body() user: CreateUserDto): Promise<any> {
    return this.authService.register(user);
  }
}
