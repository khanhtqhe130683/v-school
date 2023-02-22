import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SLOT_OF_DAY_CONST } from '../slot-of-day.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { DayTimeTableEntity } from '../../daytime-table/entities/daytime-table.entity';
import { TeacherEntity } from '../../teacher/entities/teacher.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
@Entity({ name: SLOT_OF_DAY_CONST.MODEL_NAME })
export class SlotOfDayEntity extends BaseEntity {
  @Column({ nullable: false })
  slot_number: number;

  @Column({ length: 255 })
  day_session: string;

  @ManyToOne(() => DayTimeTableEntity)
  @JoinColumn({ name: 'daytime_table_id' })
  daytime_table: DayTimeTableEntity;

  @ManyToOne(() => TeacherEntity)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;
}
