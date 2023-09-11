import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/service/users.service';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';
import {UpdateUserDto} from "../dtos/user-dto/update-user.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/list/:id')
  findAll(@Param('id') id: number) {
    return this.usersService.getUsers(id).then(data => {
      if(data || data.length > 0) {
        return {success: true, data, message: "Fetched data"}
      }else {
        return {success: false, message: "data not found "}
        
    }
  })
  }

  @Post('/save')
  public async createLogin(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createLogin(createUserDto);
  }

  @Put('/update/:id')
  update(@Param('id',ParseIntPipe) id:number,@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id,updateUserDto).then((data)=>{
          if (data.affected==1){
            return {success:true,message:'Updated is record!!!'}
          } else {
            return {success:false,message:'not updated is record!!!'}
          }
    })
  }

  @Post('/delete')
  deleteUsers(@Body() userid:number[]) {

    console.log(userid);
    // return this.usersService.deleteUsers(userid).then((data)=>{
    //   return data.affected != 0?{success:true,message:'Deleted is record!!!'} :{success:false,message:'not deleted!!!'}
    // }).catch((error)=>{
    //   return {success:false,message:error.message}
    // });
  }
}
