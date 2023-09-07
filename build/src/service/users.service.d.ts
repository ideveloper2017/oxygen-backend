import { Users } from 'src/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    getUsers(): Promise<{
        status: number;
        data: Users[];
        message: string;
    }>;
    signIn(username: string): Promise<Users>;
    createLogin(createUserDto: CreateUserDto): Promise<Users>;
}
