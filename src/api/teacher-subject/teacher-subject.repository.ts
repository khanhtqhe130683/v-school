import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { TEACHER_SUBJECT_CONST } from './teacher-subject.constant';
import { TeacherSubjectEntity } from './entities/teacher-subject.entity';

@Injectable()
export class TeacherSubjectRepository extends TypeOrmRepository<TeacherSubjectEntity> {
  constructor(
    @Inject(TEACHER_SUBJECT_CONST.MODEL_PROVIDER)
    teacherSubjectEntity: Repository<TeacherSubjectEntity>,
  ) {
    super(teacherSubjectEntity);
  }
}
