import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@repo/dbschema';
import { createUserDto } from 'src/dto/users/user-dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.user.find();
  }

  async createUser(input: createUserDto): Promise<User> {
    return await this.user.save(input);
  }

  async updateUser(id: string, input: createUserDto): Promise<string> {
    const data = await this.user.update(id, input);
    console.log(data);
    return 'updated Successfully';
  }

  async deleteUser(id: string): Promise<string> {
    const result = await this.user.delete(id);
    console.log(result);
    return `User with id : ${id} deleted successfully`;
  }
}
