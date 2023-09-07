import { AuthService } from '../../service/auth.service';
import { CreateUserDto } from '../../dtos/user-dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signDto: Record<string, any>): Promise<{
        payload: {
            username: import("../../entity/users.entity").Users;
            sub: number;
        };
    }>;
    register(user: CreateUserDto): Promise<any>;
}
