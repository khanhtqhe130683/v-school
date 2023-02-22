import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TEACHER_CLASS_CONST } from '../teacher-class.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { TeacherEntity } from '../../teacher/entities/teacher.entity';
import { ClassEntity } from '../../class/entities/class.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
@Entity({ name: TEACHER_CLASS_CONST.MODEL_NAME })
export class TeacherClassEntity extends BaseEntity {
  @ManyToOne(() => TeacherEntity)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;

  @Column({ default: true })
  is_using: boolean;
}
