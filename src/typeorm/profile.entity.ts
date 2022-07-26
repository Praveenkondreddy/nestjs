import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
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
    nullable: false,
    default: '',
  })
  interMarks: string;

  @Column({
    nullable: false,
    default: '',
  })
  degreePercentage: string;

  @Column({
    nullable: false,
    default: '',
  })
  currentOrganisation: string;

  @Column({
    nullable: false,
    default: '',
  })
  experience: string;
  
 
  @Column({
    type: 'bigint',
    name: 'userId',
    nullable:false,
    default:0
  })
  userId: string;

  @OneToOne(()=>User)
  @JoinColumn()
  user:User


}
