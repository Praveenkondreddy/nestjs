import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import {Cache} from 'cache-manager';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async createUser(data:any):Promise<User> {
   
    return this.userRepository.save(data);
  }

  loginUser(createUserDto: CreateUserDto) {
   
    return this.userRepository.findOne(createUserDto.username);
  }
  
  async findOne(username: string): Promise<any>{
    const users= await this.getUsers()
     
    return users.find(user =>user.username===username) 

  }

  async getUsers():Promise<any> {
    return await this.userRepository.find();
  }

 async findUsersById(id: number) {
    return this.userRepository.findOne(id);
  }

  async findUsersByEmail(email: string) {
 
    const users= await this.getUsers()
     
    return await users.find(user =>user.email===email) 
  }

  async deleteUsersById(id: number) {
 
    return this.userRepository.delete(id);
  }

  async updateUsersById(data:any) {

    const {username,password}=data;
 
    return this.userRepository.update(data.id,{username,password});
  }



}

