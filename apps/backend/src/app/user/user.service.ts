import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection() private readonly knex: Knex,
  ) { }

  async create(obj: CreateUserDto) {
    const user = await this.knex.table('users')
      .insert({
        name: obj.name,
      });
    return user;
  }

  async findAll() {
    const users = await this.knex.table('users').select('*');
    return users;
  }
}
