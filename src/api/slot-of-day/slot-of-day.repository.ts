import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { SLOT_OF_DAY_CONST } from './slot-of-day.constant';
import { SlotOfDayEntity } from './entities/slot-of-day.entity';

@Injectable()
export class SlotOfDayRepository extends TypeOrmRepository<SlotOfDayEntity> {
  constructor(
    @Inject(SLOT_OF_DAY_CONST.MODEL_PROVIDER)
    slotOfDayEntity: Repository<SlotOfDayEntity>,
  ) {
    super(slotOfDayEntity);
  }
}
