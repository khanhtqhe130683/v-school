import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { TEACHER_SUBJECT_CLASS_CONST } from './teacher-subject-class.constant';
import { TeacherSubjectClassEntity } from './entities/teacher-subject-class.entity';

@Injectable()
export class TeacherSubjectClassRepository extends TypeOrmRepository<TeacherSubjectClassEntity> {
  constructor(
    @Inject(TEACHER_SUBJECT_CLASS_CONST.MODEL_PROVIDER)
    teacherSubjectClassEntity: Repository<TeacherSubjectClassEntity>,
  ) {
    super(teacherSubjectClassEntity);
  }
}
