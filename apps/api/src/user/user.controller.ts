import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@repo/dbschema';
import { createUserDto } from 'src/dto/users/user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userSerive: UserService) {}
  @Get('/')
  getAllUsers(): Promise<User[]> {
    return this.userSerive.getAllUsers();
  }

  @Post('/create')
  createUser(@Body() input: createUserDto): Promise<User> {
    return this.userSerive.createUser(input);
  }

  @Patch('/update/:id')
  updateUser(
    @Param('id') id: string,
    @Body() input: createUserDto,
  ): Promise<string> {
    return this.userSerive.updateUser(id, input);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id: string): Promise<string> {
    return this.userSerive.deleteUser(id);
  }
}
