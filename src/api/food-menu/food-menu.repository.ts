import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { FOOD_MENU_CONST } from './food-menu.constant';
import { FoodMenuEntity } from './entities/food-menu.entity';

@Injectable()
export class FoodMenuRepository extends TypeOrmRepository<FoodMenuEntity> {
  constructor(
    @Inject(FOOD_MENU_CONST.MODEL_PROVIDER)
    foodMenuEntity: Repository<FoodMenuEntity>,
  ) {
    super(foodMenuEntity);
  }
}
