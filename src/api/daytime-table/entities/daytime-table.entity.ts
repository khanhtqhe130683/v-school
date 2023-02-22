import { Column, Entity } from 'typeorm';
import { DAY_TIME_TABLE_CONST } from '../daytime-table.constant';
import { BaseEntity } from '../../../share/database/base.entity';

@Entity({ name: DAY_TIME_TABLE_CONST.MODEL_NAME })
export class DayTimeTableEntity extends BaseEntity {
  @Column()
  date_of_week: number;

  @Column({ length: 255, nullable: true })
  created_by: string;

  @Column({ default: true })
  is_lastest: boolean;
}
