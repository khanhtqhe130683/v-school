import { DataSource } from 'typeorm';
import { DISH_CONST } from './dish.constant';
import { DishEntity } from './entities/dish.entity';

export const dishProvider = [
  {
    provide: DISH_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(DishEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
