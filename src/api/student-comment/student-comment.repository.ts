import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { STUDENT_COMMENT_CONST } from './student-comment.constant';
import { StudentCommentEntity } from './entities/student-comment.entity';

@Injectable()
export class StudentCommentRepository extends TypeOrmRepository<StudentCommentEntity> {
  constructor(
    @Inject(STUDENT_COMMENT_CONST.MODEL_PROVIDER)
    userEntity: Repository<StudentCommentEntity>,
  ) {
    super(userEntity);
  }
}
