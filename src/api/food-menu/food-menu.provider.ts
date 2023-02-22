import { DataSource } from 'typeorm';
import { FOOD_MENU_CONST } from './food-menu.constant';
import { FoodMenuEntity } from './entities/food-menu.entity';

export const foodMenuProvider = [
  {
    provide: FOOD_MENU_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(FoodMenuEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
