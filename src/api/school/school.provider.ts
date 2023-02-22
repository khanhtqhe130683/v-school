import { DataSource } from 'typeorm';
import { SCHOOL_CONST } from './school.constant';
import { SchoolEntity } from './entities/school.entity';

export const schoolProvider = [
  {
    provide: SCHOOL_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(SchoolEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
