import { DataSource } from 'typeorm';
import { SUBJECT_CLASS_CONST } from './subject-class.constant';
import { SubjectClassEntity } from './entities/subject-class.entity';

export const subjectClassProvider = [
  {
    provide: SUBJECT_CLASS_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(SubjectClassEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
