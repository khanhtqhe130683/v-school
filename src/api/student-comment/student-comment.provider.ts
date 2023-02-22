import { DataSource } from 'typeorm';
import { STUDENT_COMMENT_CONST } from './student-comment.constant';
import { StudentCommentEntity } from './entities/student-comment.entity';

export const studentCommentProvider = [
  {
    provide: STUDENT_COMMENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(StudentCommentEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
