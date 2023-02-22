import { Column, Entity } from 'typeorm';
import { DISH_CONST } from '../dish.constant';
import { BaseEntity } from '../../../share/database/base.entity';
@Entity({ name: DISH_CONST.MODEL_NAME })
export class DishEntity extends BaseEntity {
  @Column({ length: 255, nullable: false })
  dish_name: string;
}
