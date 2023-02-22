import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { ContractType, TeacherStatus, TEACHER_CONST } from '../teacher.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { UserGender } from '../../user/user.constant';
import { UserEntity } from '../../user/entities/user.entity';
import { SchoolEntity } from '../../school/entities/school.entity';
import { ClassEntity } from '../../class/entities/class.entity';
@Entity({ name: TEACHER_CONST.MODEL_NAME })
export class TeacherEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  first_name: string;

  @Column({ length: 255, default: null })
  last_name: string;

  @Column({ type: 'enum', enum: UserGender, default: UserGender.MALE })
  gender: number;

  @Column({ length: 255, nullable: true })
  dob: string;

  @Column({ length: 255, nullable: true })
  phone_number: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ type: 'enum', enum: TeacherStatus, default: TeacherStatus.ACTIVE })
  status: number;

  @Column({ type: 'enum', enum: ContractType, default: ContractType.FULLTIME })
  contract_type: number;

  @Column({ length: 255, nullable: true })
  salary: string;

  @OneToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => SchoolEntity)
  @JoinColumn({ name: 'school_id' })
  school: SchoolEntity;
}
