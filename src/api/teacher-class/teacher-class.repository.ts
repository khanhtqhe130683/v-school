import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { TEACHER_CLASS_CONST } from './teacher-class.constant';
import { TeacherClassEntity } from './entities/teacher-class.entity';

@Injectable()
export class TeacherClassRepository extends TypeOrmRepository<TeacherClassEntity> {
  constructor(
    @Inject(TEACHER_CLASS_CONST.MODEL_PROVIDER)
    teacherClassEntity: Repository<TeacherClassEntity>,
  ) {
    super(teacherClassEntity);
  }
}
