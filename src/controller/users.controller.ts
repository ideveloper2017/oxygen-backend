import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/service/users.service';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
import {UpdateUserDto} from "../dtos/user-dto/update-user.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/list')
  findAll() {
    return this.usersService.getUsers();
  }

  @Post('/save')
  public async createLogin(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createLogin(createUserDto);
  }

  @Put('/update')
  update(@Param('id',ParseIntPipe) id:number,@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id,updateUserDto).then((data)=>{
          if (data.affected==1){
            return {success:true,message:'Updated is record!!!'}
          } else {
            return {success:false,message:'not updated is record!!!'}
          }
    })
  }

  @Delete('/delete')
  deleteUsers(@Query('userid') userid:number[]) {
    return this.usersService.deleteUsers(userid).then((data)=>{
      return data.affected != 0?{success:true,message:'Deleted is record!!!'} :{success:false,message:'not deleted!!!'}
    }).catch((error)=>{
      return {success:false,message:error.message}
    });
  }
}
