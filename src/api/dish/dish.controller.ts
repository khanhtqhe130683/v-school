import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { QueryParamStudentDto } from '../student/dto/query-param.dto';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  create(@Body() createDishDto: CreateDishDto) {
    return this.dishService.create(createDishDto);
  }

  @Get()
  findAll(@Query() query: QueryParamStudentDto) {
    return this.dishService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishService.update(Number(id), updateDishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishService.remove(Number(id));
  }
}
