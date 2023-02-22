import { DataSource } from 'typeorm';
import { TEACHER_SUBJECT_CONST } from './teacher-subject.constant';
import { TeacherSubjectEntity } from './entities/teacher-subject.entity';

export const teacherSubjectProvider = [
  {
    provide: TEACHER_SUBJECT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(TeacherSubjectEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
