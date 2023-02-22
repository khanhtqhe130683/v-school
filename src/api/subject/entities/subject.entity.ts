import { Column, Entity } from 'typeorm';
import { SUBJECT_CONST } from '../subject.constant';
import { BaseEntity } from '../../../share/database/base.entity';
@Entity({ name: SUBJECT_CONST.MODEL_NAME })
export class SubjectEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column()
  grade: number;
}
