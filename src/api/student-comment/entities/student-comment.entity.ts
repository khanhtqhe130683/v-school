import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { STUDENT_COMMENT_CONST } from '../student-comment.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { StudentEntity } from '../../student/entities/student.entity';
@Entity({ name: STUDENT_COMMENT_CONST.MODEL_NAME })
export class StudentCommentEntity extends BaseEntity {
  @Column({ length: 2555 })
  content: string;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;
}
