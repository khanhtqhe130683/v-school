import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { DishRepository } from './dish.repository';
import { dishProvider } from './dish.provider';

@Module({
  imports: [DatabaseModule],
  providers: [DishService, DishRepository, ...dishProvider],
  exports: [DishService, DishRepository],
  controllers: [DishController],
})
export class DishModule {}
