import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts{
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'Id',
  })
  id: number;

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

  @Column({
    name: 'companyPlace',
    default: '',
  })
  companyPlace: string;

  @Column({
    name: 'description',
    default: '',
  })
  description: string;
}
