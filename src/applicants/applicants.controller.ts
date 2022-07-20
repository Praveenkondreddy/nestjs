import { Controller, Get, UseGuards,Request,Response, Session, Post, Body } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApplicantsService } from './applicants.service';

@Controller('applicants')
export class ApplicantsController {

    constructor(private readonly postsService: ApplicantsService) {}
    
    
      
      @Get('/')
      getUsers(@Request() req,@Session() session: Record<string,any>) {
      const users=this.postsService.getApplicants();
        return users;
      }
    
     
    
    
      @Post('')
      createPosts(@Body() Body) {
        return this.postsService.createApplicants(Body);
      }


}
