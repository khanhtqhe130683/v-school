import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { DAY_TIME_TABLE_CONST } from './daytime-table.constant';
import { DayTimeTableEntity } from './entities/daytime-table.entity';

@Injectable()
export class DayTimeTableRepository extends TypeOrmRepository<DayTimeTableEntity> {
  constructor(
    @Inject(DAY_TIME_TABLE_CONST.MODEL_PROVIDER)
    dayTimeTableEntity: Repository<DayTimeTableEntity>,
  ) {
    super(dayTimeTableEntity);
  }
}
