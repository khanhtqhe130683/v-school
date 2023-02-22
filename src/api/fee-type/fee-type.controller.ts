import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeeTypeService } from './fee-type.service';
import { CreateFeeTypeDto } from './dto/create-fee-type.dto';
import { UpdateFeeTypeDto } from './dto/update-fee-type.dto';

@Controller('fee-type')
export class FeeTypeController {
  constructor(private readonly feeTypeService: FeeTypeService) {}

  @Post()
  create(@Body() createFeeTypeDto: CreateFeeTypeDto) {
    return this.feeTypeService.create(createFeeTypeDto);
  }

  @Get()
  findAll() {
    return this.feeTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feeTypeService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeeTypeDto: UpdateFeeTypeDto) {
    return this.feeTypeService.update(Number(id), updateFeeTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feeTypeService.remove(Number(id));
  }
}
