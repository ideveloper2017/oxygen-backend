import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

import {Users} from 'src/entity/users.entity';
import {In, Repository} from 'typeorm';
import {CreateUserDto} from '../dtos/user-dto/create-user.dto';
import {Roles} from "../entity/roles.entity";
import {UpdateUserDto} from "../dtos/user-dto/update-user.dto";


interface userinterface {
    id: string,
    val: number
}

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {
    }

    async getUsers() {
        const users = await this.usersRepository.find({
            relations: ['roles', 'roles.permission'],
        });
        return {status: 200, data: users, message: 'Success'};
    }

    public async signIn(username: string) {
        return await this.usersRepository.manager
            .getRepository(Users)
            .findOne({where: {username: username}, relations: ['roles']})
            .then((data) => {
                return data;
            });
    }

    public async createLogin(createUserDto: CreateUserDto) {
        let role_id;
        try {
            const role = await this.usersRepository.manager.getRepository(Roles).find({where: {id: createUserDto.role_id}}).then((data) => {
                data.map(data => {
                    role_id = data.id;
                })
            })

            const newUser = new Users();
            newUser.first_name = createUserDto.first_name;
            newUser.last_name = createUserDto.last_name;
            newUser.username = createUserDto.username;
            newUser.phone_number = createUserDto.phone_number;
            newUser.password = createUserDto.password;
            newUser.is_active = createUserDto.is_active;
            newUser.roles = role_id;

            const user = this.usersRepository.save(newUser);
            return user;
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public async updateUser(id: number, updateUserDto: UpdateUserDto) {
        return await this.usersRepository.update({id: id}, updateUserDto);
    }

    public async deleteUsers(userid: string[]) {
        return this.usersRepository.delete({id: In(userid)})
    }
}
