import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {

    constructor(@InjectRepository(Profile) private readonly profileRepository: Repository<Profile>){}

    async getProfile():Promise<any> {
        return await this.profileRepository.find();
      }

      async findOne(userId: string): Promise<any>{
        const users= await this.getProfile()
      
        return users.find(user =>user.userId===userId) 
    
      }

      async createProfile(data:any):Promise<Profile> {
   
        return this.profileRepository.save(data);
      }  

}
