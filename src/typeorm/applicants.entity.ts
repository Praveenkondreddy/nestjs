import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from './posts.entity';

@Entity()
export class Applicants {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'phoneno',
    nullable: false,
    default: '',
  })
  phoneno: string;


  @Column({
    type: 'int',
    name: 'jobId',
    
  })
  jobId: number;

  @Column({
    name: 'companyName',
    nullable: false,
    default: '',
  })
  companyName: string;

  @Column({
    name: 'jobPosition',
    nullable: false,
    default: '',
  })
  jobPosition: string;
}
