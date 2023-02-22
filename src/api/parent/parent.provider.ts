import { DataSource } from 'typeorm';
import { PARENT_CONST } from './parent.constant';
import { ParentEntity } from './entities/parent.entity';

export const parentProvider = [
  {
    provide: PARENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(ParentEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
