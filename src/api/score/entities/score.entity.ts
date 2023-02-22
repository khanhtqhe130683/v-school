import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ScoreType, SCORE_CONST } from '../score.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { StudentEntity } from '../../student/entities/student.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
@Entity({ name: SCORE_CONST.MODEL_NAME })
export class ScoreEntity extends BaseEntity {
  @Column()
  score_number: number;

  @Column()
  semester: number;

  @Column()
  start_study_year: number;

  @Column({ type: 'enum', enum: ScoreType })
  score_type: number;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;
}
