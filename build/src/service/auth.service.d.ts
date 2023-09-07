import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<{
        payload: {
            username: any;
            sub: any;
        };
    }>;
    register(user: CreateUserDto): Promise<any>;
}
