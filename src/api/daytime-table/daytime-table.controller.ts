import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DayTimeTableService } from './daytime-table.service';

@Controller('daytime-table')
export class DayTimeTableController {
  constructor(private readonly daytimeTableService: DayTimeTableService) {}

  @Get()
  findAll() {
    return this.daytimeTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daytimeTableService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daytimeTableService.remove(Number(id));
  }
}
