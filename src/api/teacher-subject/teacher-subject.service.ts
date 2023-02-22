import { Injectable } from '@nestjs/common';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { QueryParamTeacherSubjectDto } from './dto/query-param.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';
import { TeacherSubjectRepository } from './teacher-subject.repository';

@Injectable()
export class TeacherSubjectService {
  constructor(private readonly teacherSubjectRepository: TeacherSubjectRepository) {}

  async create(createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.teacherSubjectRepository.save(createTeacherSubjectDto);
  }

  findAll(query: QueryParamTeacherSubjectDto) {
    const conditions = {};
    if (query.teacher) {
      conditions['teacher'] = { id: query.teacher };
    }
    if (query.subject) {
      conditions['subject'] = { id: query.subject };
    }
    return this.teacherSubjectRepository.findAllByConditions(conditions, query, { teacher: true, subject: true });
  }

  findOne(id: number) {
    return this.teacherSubjectRepository.findOneByCondition({
      where: { id: id },
      relations: { teacher: true, subject: true },
    });
  }

  update(id: number, updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return this.teacherSubjectRepository.update(id, updateTeacherSubjectDto);
  }

  remove(id: number) {
    return this.teacherSubjectRepository.softDelete(id);
  }
}
