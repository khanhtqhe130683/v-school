import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentClassDto, UpdateStudentDto, UpdateStudentStatusDto } from './dto/update-student.dto';
import { QueryParamStudentDto } from './dto/query-param.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll(@Query() query: QueryParamStudentDto) {
    return this.studentService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(Number(id));
  }

  @Patch(':id/status')
  updateStudentStatus(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentStatusDto) {
    return this.studentService.updateStatus(Number(id), updateStudentDto);
  }

  @Patch(':id/class')
  updateStudentClass(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentClassDto) {
    return this.studentService.updateClass(Number(id), updateStudentDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(Number(id), updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(Number(id));
  }
}
