import { DataSource } from 'typeorm';
import { SLOT_OF_DAY_CONST } from './slot-of-day.constant';
import { SlotOfDayEntity } from './entities/slot-of-day.entity';

export const slotOfDayProvider = [
  {
    provide: SLOT_OF_DAY_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(SlotOfDayEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
