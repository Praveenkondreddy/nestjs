import { Controller, Get, UseGuards,Request,Response, Session, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { PostsService } from './posts.service';

@Controller('posts')

export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    
    
      
      @Get('/')
      getUsers(@Request() req,@Session() session: Record<string,any>) {
      const users=this.postsService.getPosts();
        return users;
      }
    
     
    
    
      @Post('')
      @UsePipes(ValidationPipe)
      createPosts(@Body() Body) {
        return this.postsService.createPosts(Body);
      }

}
