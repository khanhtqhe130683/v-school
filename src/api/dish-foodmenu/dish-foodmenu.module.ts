import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { DishFoodmenuService } from './dish-foodmenu.service';
import { DishFoodmenuController } from './dish-foodmenu.controller';
import { DishFoodmenuRepository } from './dish-foodmenu.repository';
import { dishFoodmenuProvider } from './dish-foodmenu.provider';

@Module({
  imports: [DatabaseModule],
  providers: [DishFoodmenuService, DishFoodmenuRepository, ...dishFoodmenuProvider],
  exports: [DishFoodmenuService, DishFoodmenuRepository],
  controllers: [DishFoodmenuController],
})
export class DishFoodmenuModule {}
