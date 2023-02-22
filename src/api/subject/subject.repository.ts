import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { SUBJECT_CONST } from './subject.constant';
import { SubjectEntity } from './entities/subject.entity';

@Injectable()
export class SubjectRepository extends TypeOrmRepository<SubjectEntity> {
  constructor(
    @Inject(SUBJECT_CONST.MODEL_PROVIDER)
    subjectEntity: Repository<SubjectEntity>,
  ) {
    super(subjectEntity);
  }
}
