import { DataSource } from 'typeorm';
import { DISH_FOODMENU_CONST } from './dish-foodmenu.constant';
import { DishFoodmenuEntity } from './entities/dish-foodmenu.entity';

export const dishFoodmenuProvider = [
  {
    provide: DISH_FOODMENU_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(DishFoodmenuEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
