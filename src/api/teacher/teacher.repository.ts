import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { TEACHER_CONST } from './teacher.constant';
import { TeacherEntity } from './entities/teacher.entity';

@Injectable()
export class TeacherRepository extends TypeOrmRepository<TeacherEntity> {
  constructor(
    @Inject(TEACHER_CONST.MODEL_PROVIDER)
    teacherEntity: Repository<TeacherEntity>,
  ) {
    super(teacherEntity);
  }
}
