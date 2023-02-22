import { Injectable } from '@nestjs/common';
import { CreateTeacherClassDto } from './dto/create-teacher-class.dto';
import { QueryParamTeacherClassDto } from './dto/query-param.dto';
import { UpdateTeacherClassDto } from './dto/update-teacher-class.dto';
import { TeacherClassRepository } from './teacher-class.repository';

@Injectable()
export class TeacherClassService {
  constructor(private readonly teacherClassRepository: TeacherClassRepository) {}

  create(createTeacherClassDto: CreateTeacherClassDto) {
    return this.teacherClassRepository.save(createTeacherClassDto);
  }

  findAll(query: QueryParamTeacherClassDto) {
    const conditions = {};
    if (query.class) {
      conditions['class'] = { id: query.class };
    }
    if (query.teacher) {
      conditions['teacher'] = { id: query.teacher };
    }
    if (query.subject) {
      conditions['subject'] = { id: query.subject };
    }
    return this.teacherClassRepository.findAllByConditions(conditions, query, {
      class: true,
      teacher: true,
      subject: true,
    });
  }

  findOne(id: number) {
    return this.teacherClassRepository.findOneByCondition({
      where: { id: id },
      relations: { teacher: true, class: true, subject: true },
    });
  }

  update(id: number, updateTeacherClassDto: UpdateTeacherClassDto) {
    return this.teacherClassRepository.update(id, updateTeacherClassDto);
  }

  remove(id: number) {
    return this.teacherClassRepository.softDelete(id);
  }
}
