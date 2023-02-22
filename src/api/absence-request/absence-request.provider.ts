import { DataSource } from 'typeorm';
import { ABSENCE_REQUEST_CONST } from './absence-request.constant';
import { AbsenceRequestEntity } from './entities/absence-request.entity';

export const absenceRequestProvider = [
  {
    provide: ABSENCE_REQUEST_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(AbsenceRequestEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
