import { Injectable } from '@nestjs/common';
import { CreateClassNoteDto } from './dto/create-class-note.dto';
import { UpdateClassNoteDto } from './dto/update-class-note.dto';

@Injectable()
export class ClassNoteService {
  create(createClassNoteDto: CreateClassNoteDto) {
    return 'This action adds a new classNote';
  }

  findAll() {
    return `This action returns all classNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classNote`;
  }

  update(id: number, updateClassNoteDto: UpdateClassNoteDto) {
    return `This action updates a #${id} classNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} classNote`;
  }
}
