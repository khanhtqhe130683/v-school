import { Injectable } from '@nestjs/common';
import { CreateFoodMenuDto } from './dto/create-food-menu.dto';
import { UpdateFoodMenuDto } from './dto/update-food-menu.dto';
import { FoodMenuRepository } from './food-menu.repository';

@Injectable()
export class FoodMenuService {
  constructor(private readonly foodMenuRepository: FoodMenuRepository) {}

  async create(createFoodMenuDto: CreateFoodMenuDto) {
    return this.foodMenuRepository.save(createFoodMenuDto);
  }

  async findAll() {
    return this.foodMenuRepository.findAllByConditions({}, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} foodMenu`;
  }

  async update(id: number, updateFoodMenuDto: UpdateFoodMenuDto) {
    return this.foodMenuRepository.update(id, updateFoodMenuDto);
  }

  async remove(id: number) {
    return this.foodMenuRepository.softDelete(id);
  }
}
