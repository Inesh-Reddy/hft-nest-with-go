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
    await this.user.update(id, input);
    return 'updated Successfully';
  }

  async deleteUser(id: string): Promise<string> {
    await this.user.delete(id);
    return `User with id : ${id} deleted successfully`;
  }
}
