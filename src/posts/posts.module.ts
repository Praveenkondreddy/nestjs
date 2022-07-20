import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from 'src/typeorm';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[TypeOrmModule.forFeature([Posts]),PassportModule.register({session:true})]
})
export class PostsModule {}
