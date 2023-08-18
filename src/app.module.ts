import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';
import { TweetsController } from './tweets/tweets.controller';
import { UsersService } from './users/users.service';
import { TweetsService } from './tweets/tweets.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [TweetsModule, UsersModule],
  controllers: [AppController, UsersController, TweetsController],
  providers: [AppService, UsersService, TweetsService],
})
export class AppModule {}
