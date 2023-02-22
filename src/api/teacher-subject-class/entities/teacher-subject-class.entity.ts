import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TEACHER_SUBJECT_CLASS_CONST } from '../teacher-subject-class.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { TeacherEntity } from '../../teacher/entities/teacher.entity';
import { SubjectClassEntity } from '../../subject-class/entities/subject-class.entity';
@Entity({ name: TEACHER_SUBJECT_CLASS_CONST.MODEL_NAME })
export class TeacherSubjectClassEntity extends BaseEntity {
  @ManyToOne(() => TeacherEntity)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => SubjectClassEntity)
  @JoinColumn({ name: 'subject_class_id' })
  subject_class: SubjectClassEntity;
}
