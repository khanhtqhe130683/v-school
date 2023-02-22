import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TEACHER_SUBJECT_CONST } from '../teacher-subject.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { TeacherEntity } from '../../teacher/entities/teacher.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
@Entity({ name: TEACHER_SUBJECT_CONST.MODEL_NAME })
export class TeacherSubjectEntity extends BaseEntity {
  @ManyToOne(() => TeacherEntity)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;
}
