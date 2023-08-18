import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  username: string;

  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  avatar: string;
}
