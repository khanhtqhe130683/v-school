import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SlotOfDayService } from './slot-of-day.service';
import { CreateSlotOfDayDto } from './dto/create-slot-of-day.dto';
import { UpdateSlotOfDayDto } from './dto/update-slot-of-day.dto';
import { QueryParamSlotDto } from './dto/query-param.dto';
import { ROLES } from '../role/role.constant';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { RequireRole } from 'src/share/decorator/require-permissions.decorator';

@Controller('slots-of-day')
export class SlotOfDayController {
  constructor(private readonly slotOfDayService: SlotOfDayService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Post()
  create(@Body() createSlotOfDayDto: CreateSlotOfDayDto) {
    return this.slotOfDayService.create(createSlotOfDayDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Get()
  findAll(@Query() query: QueryParamSlotDto) {
    return this.slotOfDayService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slotOfDayService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlotOfDayDto: UpdateSlotOfDayDto) {
    return this.slotOfDayService.update(Number(id), updateSlotOfDayDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slotOfDayService.remove(Number(id));
  }
}
