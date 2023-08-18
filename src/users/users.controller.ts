import { UserDto } from './dto/user.dto';
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/sign-up')
  signup(@Body() user: UserDto) {
    if (!user.username || !user.avatar) {
      throw new HttpException(
        'All fields are required!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersService.signup(user);
  }
}
