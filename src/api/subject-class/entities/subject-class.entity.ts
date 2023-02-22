import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SUBJECT_CLASS_CONST } from '../subject-class.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
import { ClassEntity } from '../../class/entities/class.entity';
@Entity({ name: SUBJECT_CLASS_CONST.MODEL_NAME })
export class SubjectClassEntity extends BaseEntity {
  @Column()
  start_year: number;

  @Column()
  semester: number;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;
}
