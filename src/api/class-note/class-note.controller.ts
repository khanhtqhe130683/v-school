import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassNoteService } from './class-note.service';
import { CreateClassNoteDto } from './dto/create-class-note.dto';
import { UpdateClassNoteDto } from './dto/update-class-note.dto';

@Controller('class-note')
export class ClassNoteController {
  constructor(private readonly classNoteService: ClassNoteService) {}

  @Post()
  create(@Body() createClassNoteDto: CreateClassNoteDto) {
    return this.classNoteService.create(createClassNoteDto);
  }

  @Get()
  findAll() {
    return this.classNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassNoteDto: UpdateClassNoteDto) {
    return this.classNoteService.update(+id, updateClassNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classNoteService.remove(+id);
  }
}
