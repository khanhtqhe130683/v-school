import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherSubjectClassService } from './teacher-subject-class.service';
import { CreateTeacherSubjectClassDto } from './dto/create-teacher-subject-class.dto';
import { UpdateTeacherSubjectClassDto } from './dto/update-teacher-subject-class.dto';

@Controller('teacher-subject-class')
export class TeacherSubjectClassController {
  constructor(private readonly teacherSubjectClassService: TeacherSubjectClassService) {}

  @Post()
  create(@Body() createTeacherSubjectClassDto: CreateTeacherSubjectClassDto) {
    return this.teacherSubjectClassService.create(createTeacherSubjectClassDto);
  }

  @Get()
  findAll() {
    return this.teacherSubjectClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherSubjectClassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherSubjectClassDto: UpdateTeacherSubjectClassDto) {
    return this.teacherSubjectClassService.update(+id, updateTeacherSubjectClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherSubjectClassService.remove(+id);
  }
}
