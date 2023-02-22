import { Injectable } from '@nestjs/common';
import { DishFoodmenuRepository } from './dish-foodmenu.repository';
import { CreateDishFoodmenuDto } from './dto/create-dish-foodmenu.dto';
import { QueryParamDishFoodmenuDto } from './dto/query-param.dto';
import { UpdateDishFoodmenuDto } from './dto/update-dish-foodmenu.dto';

@Injectable()
export class DishFoodmenuService {
  constructor(private readonly dishFoodmenuRepository: DishFoodmenuRepository) {}

  async create(createDishFoodmenuDto: CreateDishFoodmenuDto) {
    return this.dishFoodmenuRepository.save(createDishFoodmenuDto);
  }

  async findAll(query: QueryParamDishFoodmenuDto) {
    const conditions = {};
    if (query.food_menu) {
      conditions['food_menu'] = { id: query.food_menu };
    }
    if (query.dish) {
      conditions['dish'] = { id: query.dish };
    }
    return this.dishFoodmenuRepository.findAllByConditions(conditions, query, { food_menu: true, dish: true });
  }

  async findOne(id: number) {
    return this.dishFoodmenuRepository.findOneByCondition({
      where: { id: id },
      relations: { food_menu: true, dish: true },
    });
  }

  async update(id: number, updateDishFoodmenuDto: UpdateDishFoodmenuDto) {
    return this.dishFoodmenuRepository.update(id, updateDishFoodmenuDto);
  }

  async remove(id: number) {
    return this.dishFoodmenuRepository.softDelete(id);
  }
}
