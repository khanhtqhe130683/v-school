import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { SUBJECT_CLASS_CONST } from './subject-class.constant';
import { SubjectClassEntity } from './entities/subject-class.entity';

@Injectable()
export class SubjectClassRepository extends TypeOrmRepository<SubjectClassEntity> {
  constructor(
    @Inject(SUBJECT_CLASS_CONST.MODEL_PROVIDER)
    subjectClassEntity: Repository<SubjectClassEntity>,
  ) {
    super(subjectClassEntity);
  }
}
