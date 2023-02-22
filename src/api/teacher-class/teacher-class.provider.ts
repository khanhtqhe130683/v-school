import { DataSource } from 'typeorm';
import { TEACHER_CLASS_CONST } from './teacher-class.constant';
import { TeacherClassEntity } from './entities/teacher-class.entity';

export const teacherClassProvider = [
  {
    provide: TEACHER_CLASS_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(TeacherClassEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
