import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { FEE_TYPE_CONST } from './fee-type.constant';
import { FeeTypeEntity } from './entities/fee-type.entity';

@Injectable()
export class FeeTypeRepository extends TypeOrmRepository<FeeTypeEntity> {
  constructor(
    @Inject(FEE_TYPE_CONST.MODEL_PROVIDER)
    feeTypeEntity: Repository<FeeTypeEntity>,
  ) {
    super(feeTypeEntity);
  }
}
