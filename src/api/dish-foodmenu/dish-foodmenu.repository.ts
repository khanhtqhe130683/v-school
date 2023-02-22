import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { DISH_FOODMENU_CONST } from './dish-foodmenu.constant';
import { DishFoodmenuEntity } from './entities/dish-foodmenu.entity';

@Injectable()
export class DishFoodmenuRepository extends TypeOrmRepository<DishFoodmenuEntity> {
  constructor(
    @Inject(DISH_FOODMENU_CONST.MODEL_PROVIDER)
    dishFoodmenuEntity: Repository<DishFoodmenuEntity>,
  ) {
    super(dishFoodmenuEntity);
  }
}
