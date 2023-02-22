import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { FoodMenuService } from './food-menu.service';
import { FoodMenuController } from './food-menu.controller';
import { FoodMenuRepository } from './food-menu.repository';
import { foodMenuProvider } from './food-menu.provider';

@Module({
  imports: [DatabaseModule],
  providers: [FoodMenuService, FoodMenuRepository, ...foodMenuProvider],
  exports: [FoodMenuService, FoodMenuRepository],
  controllers: [FoodMenuController],
})
export class FoodMenuModule {}
