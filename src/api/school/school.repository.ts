import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { SCHOOL_CONST } from './school.constant';
import { SchoolEntity } from './entities/school.entity';

@Injectable()
export class SchoolRepository extends TypeOrmRepository<SchoolEntity> {
  constructor(
    @Inject(SCHOOL_CONST.MODEL_PROVIDER)
    schoolEntity: Repository<SchoolEntity>,
  ) {
    super(schoolEntity);
  }
}
