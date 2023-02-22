import { DataSource } from 'typeorm';
import { TIME_TABLE_CONST } from './time-table.constant';
import { TimeTableEntity } from './entities/time-table.entity';

export const timeTableProvider = [
  {
    provide: TIME_TABLE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(TimeTableEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
