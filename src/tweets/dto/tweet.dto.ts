import { IsNotEmpty, IsString } from 'class-validator';

export class TweetDto {
  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  username: string;

  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  message: string;
}
