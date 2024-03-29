import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectClassService } from './subject-class.service';
import { CreateSubjectClassDto } from './dto/create-subject-class.dto';
import { UpdateSubjectClassDto } from './dto/update-subject-class.dto';

@Controller('subject-class')
export class SubjectClassController {
  constructor(private readonly subjectClassService: SubjectClassService) {}

  @Post()
  create(@Body() createSubjectClassDto: CreateSubjectClassDto) {
    return this.subjectClassService.create(createSubjectClassDto);
  }

  @Get()
  findAll() {
    return this.subjectClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectClassService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectClassDto: UpdateSubjectClassDto) {
    return this.subjectClassService.update(Number(id), updateSubjectClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectClassService.remove(Number(id));
  }
}
