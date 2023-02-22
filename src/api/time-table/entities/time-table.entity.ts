import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TIME_TABLE_CONST } from '../time-table.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { ClassEntity } from '../../class/entities/class.entity';

@Entity({ name: TIME_TABLE_CONST.MODEL_NAME })
export class TimeTableEntity extends BaseEntity {
  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;

  @Column()
  start_year: number;

  @Column()
  end_year: number;

  @Column()
  semester: number;

  @Column({ length: 255, nullable: true })
  created_by: string;
}
