import { Injectable } from '@nestjs/common';
import { CreateStudentCommentDto } from './dto/create-student-comment.dto';
import { UpdateStudentCommentDto } from './dto/update-student-comment.dto';
import { StudentCommentRepository } from './student-comment.repository';

@Injectable()
export class StudentCommentService {
  constructor(private readonly studentCommentRepository: StudentCommentRepository) {}

  create(createStudentCommentDto: CreateStudentCommentDto) {
    return this.studentCommentRepository.save(createStudentCommentDto);
  }

  findAll() {
    return `This action returns all studentComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentComment`;
  }

  update(id: number, updateStudentCommentDto: UpdateStudentCommentDto) {
    return this.studentCommentRepository.update(id, updateStudentCommentDto);
  }

  remove(id: number) {
    return this.studentCommentRepository.softDelete(id);
  }
}
