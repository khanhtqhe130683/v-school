import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { STUDENT_CLASS_CONST } from '../student-class.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { StudentEntity } from '../../student/entities/student.entity';
import { ClassEntity } from '../../class/entities/class.entity';
@Entity({ name: STUDENT_CLASS_CONST.MODEL_NAME })
export class StudentClassEntity extends BaseEntity {
  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;
}
