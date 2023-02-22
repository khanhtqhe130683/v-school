import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import {
  UpdateContractTypeDto,
  UpdateHomeroomTeacherDto,
  UpdateSalaryDto,
  UpdateTeacherDto,
} from './dto/update-teacher.dto';
import { QueryParamTeacherDto } from './dto/query-param.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ROLES } from '../role/role.constant';
import { RequireRole } from 'src/share/decorator/require-permissions.decorator';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Get()
  findAll(@Query() query: QueryParamTeacherDto) {
    return this.teacherService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Patch(':id/homeroom')
  updateHomeroomTeacher(@Param('id') id: string, @Body() updateTeacherDto: UpdateHomeroomTeacherDto) {
    return this.teacherService.updateHomeroom(Number(id), updateTeacherDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Patch(':id/contract-type')
  updateContractType(@Param('id') id: string, @Body() updateTeacherDto: UpdateContractTypeDto) {
    return this.teacherService.updateContractType(Number(id), updateTeacherDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Patch(':id/salary')
  updateSalary(@Param('id') id: string, @Body() updateTeacherDto: UpdateSalaryDto) {
    return this.teacherService.updateSalary(Number(id), updateTeacherDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL, ROLES.TEACHER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(Number(id), updateTeacherDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(Number(id));
  }
}
