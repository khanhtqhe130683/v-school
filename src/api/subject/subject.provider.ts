import { DataSource } from 'typeorm';
import { SUBJECT_CONST } from './subject.constant';
import { SubjectEntity } from './entities/subject.entity';

export const subjectProvider = [
  {
    provide: SUBJECT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(SubjectEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
