import { DataSource } from 'typeorm';
import { FEE_TYPE_CONST } from './fee-type.constant';
import { FeeTypeEntity } from './entities/fee-type.entity';

export const feeTypeProvider = [
  {
    provide: FEE_TYPE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(FeeTypeEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
