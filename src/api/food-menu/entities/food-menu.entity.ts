import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { FOOD_MENU_CONST } from '../food-menu.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { ClassEntity } from '../../class/entities/class.entity';
@Entity({ name: FOOD_MENU_CONST.MODEL_NAME })
export class FoodMenuEntity extends BaseEntity {
  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;
}
