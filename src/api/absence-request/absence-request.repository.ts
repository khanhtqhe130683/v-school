import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { ABSENCE_REQUEST_CONST } from './absence-request.constant';
import { AbsenceRequestEntity } from './entities/absence-request.entity';

@Injectable()
export class AbsenceRequestRepository extends TypeOrmRepository<AbsenceRequestEntity> {
  constructor(
    @Inject(ABSENCE_REQUEST_CONST.MODEL_PROVIDER)
    absenceRequestEntity: Repository<AbsenceRequestEntity>,
  ) {
    super(absenceRequestEntity);
  }
}
