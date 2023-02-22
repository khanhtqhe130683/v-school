import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DISH_FOODMENU_CONST } from '../dish-foodmenu.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { FoodMenuEntity } from '../../food-menu/entities/food-menu.entity';
import { DishEntity } from '../../dish/entities/dish.entity';
@Entity({ name: DISH_FOODMENU_CONST.MODEL_NAME })
export class DishFoodmenuEntity extends BaseEntity {
  @Column({ default: true })
  is_using: boolean;

  @ManyToOne(() => FoodMenuEntity)
  @JoinColumn({ name: 'food_menu_id' })
  food_menu: FoodMenuEntity;

  @ManyToOne(() => DishEntity)
  @JoinColumn({ name: 'dish_id' })
  dish: DishEntity;
}
