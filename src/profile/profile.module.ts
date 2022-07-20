import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  imports:[TypeOrmModule.forFeature([Profile]),PassportModule.register({session:true})]
})
export class ProfileModule {}
