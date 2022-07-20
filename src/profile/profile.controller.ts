import { Body, Controller, Get, Param, ParseIntPipe, Post,Request, Session, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ProfileService } from './profile.service';

@Controller('profile')

export class ProfileController {

    constructor(private readonly profileService: ProfileService) {}
        
        @Get('/')
        getUsers(@Request() req,@Session() session: Record<string,any>) {
        const users=this.profileService.getProfile();
          return users;
        }

        @Get('/:userId')
  findUsersById(@Param('userId') userId) {
    return this.profileService.findOne(userId);
  }
      
      @Post('')
      createPosts(@Body() Body) {
        return this.profileService.createProfile(Body);
      }

}
