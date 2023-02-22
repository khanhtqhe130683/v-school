import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeacherSubjectService } from './teacher-subject.service';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';
import { QueryParamTeacherSubjectDto } from './dto/query-param.dto';

@Controller('teacher')
export class TeacherSubjectController {
  constructor(private readonly teacherSubjectService: TeacherSubjectService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherSubjectDto) {
    return this.teacherSubjectService.create(createTeacherDto);
  }

  @Get()
  findAll(@Query() query: QueryParamTeacherSubjectDto) {
    return this.teacherSubjectService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherSubjectService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return this.teacherSubjectService.update(Number(id), updateTeacherSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherSubjectService.remove(Number(id));
  }
}
