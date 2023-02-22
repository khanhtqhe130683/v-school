import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeacherClassService } from './teacher-class.service';
import { CreateTeacherClassDto } from './dto/create-teacher-class.dto';
import { UpdateTeacherClassDto } from './dto/update-teacher-class.dto';
import { QueryParamTeacherClassDto } from './dto/query-param.dto';

@Controller('teacher-class')
export class TeacherClassController {
  constructor(private readonly teacherClassService: TeacherClassService) {}

  @Post()
  create(@Body() createTeacherClassDto: CreateTeacherClassDto) {
    return this.teacherClassService.create(createTeacherClassDto);
  }

  @Get()
  findAll(@Query() query: QueryParamTeacherClassDto) {
    return this.teacherClassService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherClassService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherClassDto: UpdateTeacherClassDto) {
    return this.teacherClassService.update(Number(id), updateTeacherClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherClassService.remove(Number(id));
  }
}
