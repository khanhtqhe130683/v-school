import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { DISH_CONST } from './dish.constant';
import { DishEntity } from './entities/dish.entity';

@Injectable()
export class DishRepository extends TypeOrmRepository<DishEntity> {
  constructor(
    @Inject(DISH_CONST.MODEL_PROVIDER)
    dishEntity: Repository<DishEntity>,
  ) {
    super(dishEntity);
  }
}
