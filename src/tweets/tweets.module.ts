import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService, UsersService],
})
export class TweetsModule {}
