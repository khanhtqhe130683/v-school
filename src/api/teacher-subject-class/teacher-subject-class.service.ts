import { Injectable } from '@nestjs/common';
import { CreateTeacherSubjectClassDto } from './dto/create-teacher-subject-class.dto';
import { UpdateTeacherSubjectClassDto } from './dto/update-teacher-subject-class.dto';

@Injectable()
export class TeacherSubjectClassService {
  create(createTeacherSubjectClassDto: CreateTeacherSubjectClassDto) {
    return 'This action adds a new teacherSubjectClass';
  }

  findAll() {
    return `This action returns all teacherSubjectClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherSubjectClass`;
  }

  update(id: number, updateTeacherSubjectClassDto: UpdateTeacherSubjectClassDto) {
    return `This action updates a #${id} teacherSubjectClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherSubjectClass`;
  }
}
