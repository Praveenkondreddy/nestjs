import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
  BadRequestException,
  Response,
  Session
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { session } from 'passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService,
    private jwtService:JwtService) {}


  @UseGuards(AuthenticatedGuard)  
  @Get('/protected')
  getUsers(@Request() req,@Session() session: Record<string,any>) {
  const users=this.userService.getUsers();
    return users;
  }

   
  @Get()
  getUser(@Request() req) {

    const users=this.userService.getUsers();
    return users;
  }

  
  @Get('session')
  getUsersSession(@Session() session: Record<string,any>) {

    console.log(session);
    console.log(session.id)
  }

  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUsersById(id);
  }

  @Get('email/:email')
  findUsersByEmail(@Param('email') email: string) {
    
    return this.userService.findUsersByEmail(email);
  }

  @Post('register')
  @UsePipes(ValidationPipe)
  createUsers(@Body() Body) {
    return this.userService.createUser(Body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
 async loginUsers(@Body() Body,@Response() res,@Request() req,@Session() session: Record<string,any>) {
  
    const user =await this.userService.findOne(Body.username);
    if (!user){
      throw new BadRequestException();
    }
    console.log(session.id)
    if (user.password===Body.password){
      const jwt = await this.jwtService.signAsync(user.username,{secret:"SECRET"}); 
      res.send({ msg:"Logged in",jwt,user });
      
    }
  }
 
    

  }


  

