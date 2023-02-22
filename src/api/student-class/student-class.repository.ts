import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { STUDENT_CLASS_CONST } from './student-class.constant';
import { StudentClassEntity } from './entities/student-class.entity';

@Injectable()
export class StudentClassRepository extends TypeOrmRepository<StudentClassEntity> {
  constructor(
    @Inject(STUDENT_CLASS_CONST.MODEL_PROVIDER)
    studentClassEntity: Repository<StudentClassEntity>,
  ) {
    super(studentClassEntity);
  }
}
