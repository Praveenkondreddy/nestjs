import { CacheModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { validateToken } from 'src/middlewears/middlewear';

import cors from "express";
import { PassportModule } from '@nestjs/passport';
import * as redisStore from "cache-manager-redis-store"


@Module({
  imports: [TypeOrmModule.forFeature([User]),PassportModule.register({session:true}),CacheModule.register({
    store:redisStore,
    socket:{
      host:'localhost',
      port:6379
    }
  })],
  controllers: [UsersController],
  providers: [UsersService,JwtService],
  exports:[UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validateToken).forRoutes(
    
    )
  }
}
