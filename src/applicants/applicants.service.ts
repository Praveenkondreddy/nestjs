import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Applicants } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicantsService {

    constructor(@InjectRepository(Applicants) private readonly applicantsRepository: Repository<Applicants>){}

    async getApplicants():Promise<any> {
        return await this.applicantsRepository.find();
      }

      async createApplicants(data:any):Promise<Applicants> {
   
        return this.applicantsRepository.save(data);
      }  
}
