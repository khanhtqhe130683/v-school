import { DataSource } from 'typeorm';
import { STUDENT_CONST } from './student.constant';
import { StudentEntity } from './entities/student.entity';

export const studentProvider = [
  {
    provide: STUDENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(StudentEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
