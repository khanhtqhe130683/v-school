import { Injectable } from '@nestjs/common';
import { DishRepository } from './dish.repository';
import { CreateDishDto } from './dto/create-dish.dto';
import { QueryParamDishDto } from './dto/query-param.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  constructor(private readonly dishRepository: DishRepository) {}
  create(createDishDto: CreateDishDto) {
    return this.dishRepository.save(createDishDto);
  }

  findAll(query: QueryParamDishDto) {
    return this.dishRepository.findAllByConditions({}, query);
  }

  findOne(id: number) {
    return this.dishRepository.findOneByCondition({ where: { id: id } });
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    return this.dishRepository.update(id, updateDishDto);
  }

  remove(id: number) {
    return this.dishRepository.softDelete(id);
  }
}
