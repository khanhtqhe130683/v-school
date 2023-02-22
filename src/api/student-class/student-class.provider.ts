import { DataSource } from 'typeorm';
import { STUDENT_CLASS_CONST } from './student-class.constant';
import { StudentClassEntity } from './entities/student-class.entity';

export const studentClassProvider = [
  {
    provide: STUDENT_CLASS_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(StudentClassEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
