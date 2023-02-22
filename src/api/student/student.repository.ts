import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { STUDENT_CONST } from './student.constant';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentRepository extends TypeOrmRepository<StudentEntity> {
  constructor(
    @Inject(STUDENT_CONST.MODEL_PROVIDER)
    studentEntity: Repository<StudentEntity>,
  ) {
    super(studentEntity);
  }
}
