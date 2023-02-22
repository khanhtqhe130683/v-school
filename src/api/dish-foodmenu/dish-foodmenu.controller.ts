import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DishFoodmenuService } from './dish-foodmenu.service';
import { CreateDishFoodmenuDto } from './dto/create-dish-foodmenu.dto';
import { QueryParamDishFoodmenuDto } from './dto/query-param.dto';
import { UpdateDishFoodmenuDto } from './dto/update-dish-foodmenu.dto';

@Controller('dish-foodmenu')
export class DishFoodmenuController {
  constructor(private readonly dishFoodmenuService: DishFoodmenuService) {}

  @Post()
  create(@Body() createDishFoodmenuDto: CreateDishFoodmenuDto) {
    return this.dishFoodmenuService.create(createDishFoodmenuDto);
  }

  @Get()
  findAll(@Query() query: QueryParamDishFoodmenuDto) {
    return this.dishFoodmenuService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishFoodmenuService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishFoodmenuDto: UpdateDishFoodmenuDto) {
    return this.dishFoodmenuService.update(Number(id), updateDishFoodmenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishFoodmenuService.remove(Number(id));
  }
}
