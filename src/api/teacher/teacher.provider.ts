import { DataSource } from 'typeorm';
import { TEACHER_CONST } from './teacher.constant';
import { TeacherEntity } from './entities/teacher.entity';

export const teacherProvider = [
  {
    provide: TEACHER_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(TeacherEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
