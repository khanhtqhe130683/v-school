import { DataSource } from 'typeorm';
import { TEACHER_SUBJECT_CLASS_CONST } from './teacher-subject-class.constant';
import { TeacherSubjectClassEntity } from './entities/teacher-subject-class.entity';

export const teacherSubjectClassProvider = [
  {
    provide: TEACHER_SUBJECT_CLASS_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(TeacherSubjectClassEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
