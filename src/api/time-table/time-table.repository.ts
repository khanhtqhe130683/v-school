import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { TIME_TABLE_CONST } from './time-table.constant';
import { TimeTableEntity } from './entities/time-table.entity';

@Injectable()
export class TimeTableRepository extends TypeOrmRepository<TimeTableEntity> {
  constructor(
    @Inject(TIME_TABLE_CONST.MODEL_PROVIDER)
    timeTableEntity: Repository<TimeTableEntity>,
  ) {
    super(timeTableEntity);
  }
}
