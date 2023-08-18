import {
  Controller,
  Post,
  Get,
  Param,
  HttpStatus,
  Body,
  Query,
  HttpException,
} from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetDto } from './dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  createTweet(@Body() tweetData: TweetDto) {
    const tweet = this.tweetsService.createTweet(
      tweetData.username,
      tweetData.tweet,
    );
    return {
      statusCode: HttpStatus.CREATED,
      tweet,
    };
  }

  @Get()
  getTweets(@Query('page') page: number) {
    if (page <= 0) {
      throw new HttpException('Invalid page!', HttpStatus.BAD_REQUEST);
    }

    const tweets = this.tweetsService.getTweets(page);
    return tweets;
  }
  @Get(':username')
  getUserTweets(@Param('username') username: string) {
    const tweets = this.tweetsService.getUserTweets(username);
    return tweets;
  }
}
