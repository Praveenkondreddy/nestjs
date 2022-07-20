import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicants } from 'src/typeorm';
import { ApplicantsController } from './applicants.controller';
import { ApplicantsService } from './applicants.service';

@Module({
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
  imports:[TypeOrmModule.forFeature([Applicants]),PassportModule.register({session:true})]
})
export class ApplicantsModule {}
