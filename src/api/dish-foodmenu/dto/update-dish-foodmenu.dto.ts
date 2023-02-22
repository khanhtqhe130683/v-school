import { PartialType } from '@nestjs/swagger';
import { CreateDishFoodmenuDto } from './create-dish-foodmenu.dto';

export class UpdateDishFoodmenuDto extends PartialType(CreateDishFoodmenuDto) {}
