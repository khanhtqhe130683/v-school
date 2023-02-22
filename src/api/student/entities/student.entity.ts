import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { StudentStatus, STUDENT_CONST } from '../student.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { ClassEntity } from '../../class/entities/class.entity';
import { UserGender } from '../../user/user.constant';
@Entity({ name: STUDENT_CONST.MODEL_NAME })
export class StudentEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ length: 50 })
  bhyt_num: string;

  @Column({ length: 50 })
  cmnd: string;

  @Column({ type: 'enum', enum: StudentStatus, default: StudentStatus.ACTIVE })
  status: number;

  @Column({ type: 'enum', enum: UserGender })
  gender: number;

  @Column({ length: 50 })
  student_code: string;

  @Column({ length: 50, nullable: true })
  dob: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ length: 255 })
  parent_phonenum: string;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;
}
