import { DataSource } from 'typeorm';
import { DAY_TIME_TABLE_CONST } from './daytime-table.constant';
import { DayTimeTableEntity } from './entities/daytime-table.entity';

export const dayTimeTableProvider = [
  {
    provide: DAY_TIME_TABLE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(DayTimeTableEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
