import { UsersService } from 'src/service/users.service';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        status: number;
        data: import("../entity/users.entity").Users[];
        message: string;
    }>;
    createLogin(createUserDto: CreateUserDto): Promise<import("../entity/users.entity").Users>;
    update(createUserDto: CreateUserDto): void;
    edit(createUserDto: CreateUserDto): void;
}
