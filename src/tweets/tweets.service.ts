import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from '../users/entities';
import { UsersService } from '../users/users.service';

@Injectable()
export class TweetsService {
  private tweets: Tweet[] = [];

  constructor(private userService: UsersService) {
    this.userService = userService;
  }

  createTweet(username: string, tweet: string): Tweet {
    const user: User = this.userService.getUser(username);
    if (!user) {
      throw new HttpException('User not found!', HttpStatus.UNAUTHORIZED);
    }

    const newTweet: Tweet = {
      username,
      tweet,
    };
    this.tweets.push(newTweet);
    return newTweet;
  }

  getTweets(page: number) {
    if (page === undefined) {
      page = 1;
    }
    const startIndex = (page - 1) * 15;
    const endIndex = startIndex + 15;
    const slicedTweets = this.tweets.slice(startIndex, endIndex);
    const tweetsWithAvatar = slicedTweets.map((tweet) => {
      const user = this.userService.getUser(tweet.username);
      return {
        ...tweet,
        avatar: user ? user.avatar : null,
      };
    });
    console.log(tweetsWithAvatar.length);
    return tweetsWithAvatar;
  }

  getUserTweets(username: string) {
    const user: User = this.userService.getUser(username);
    if (!user) {
      return [];
    }
    const tweetsWithAvatar = this.tweets
      .filter((tweet) => tweet.username === username)
      .map((tweet) => ({
        ...tweet,
        avatar: user.avatar,
      }));
    return tweetsWithAvatar;
  }
}
