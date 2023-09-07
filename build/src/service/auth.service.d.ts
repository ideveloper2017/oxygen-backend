import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<{
        payload: {
            username: import("../entity/users.entity").Users;
            sub: number;
        };
    }>;
    register(user: CreateUserDto): Promise<any>;
}
