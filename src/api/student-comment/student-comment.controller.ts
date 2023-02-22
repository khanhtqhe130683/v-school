import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCommentService } from './student-comment.service';
import { CreateStudentCommentDto } from './dto/create-student-comment.dto';
import { UpdateStudentCommentDto } from './dto/update-student-comment.dto';

@Controller('student-comment')
export class StudentCommentController {
  constructor(private readonly studentCommentService: StudentCommentService) {}

  @Post()
  create(@Body() createStudentCommentDto: CreateStudentCommentDto) {
    return this.studentCommentService.create(createStudentCommentDto);
  }

  @Get()
  findAll() {
    return this.studentCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCommentService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCommentDto: UpdateStudentCommentDto) {
    return this.studentCommentService.update(Number(id), updateStudentCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCommentService.remove(Number(id));
  }
}
