import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private readonly postsRepository: Repository<Posts>){}

    async getPosts():Promise<any> {
        return await this.postsRepository.find();
      }

      async createPosts(data:any):Promise<Posts> {
   
        return this.postsRepository.save(data);
      }  



}
