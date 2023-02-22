import { DataSource } from 'typeorm';
import { CLASS_CONST } from './class.constant';
import { ClassEntity } from './entities/class.entity';

export const classProvider = [
  {
    provide: CLASS_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(ClassEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
