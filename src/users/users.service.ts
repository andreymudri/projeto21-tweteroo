import { Injectable } from '@nestjs/common';
import { User } from './entities';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  signup(user: UserDto): User {
    const usuario = {
      username: user.username,
      avatar: user.avatar,
    };
    this.users.push(usuario);
    return usuario;
  }
  getUser(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
