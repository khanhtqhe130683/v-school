import { Injectable } from '@nestjs/common';
import { QueryParamTeacherDto } from './dto/query-param.dto';
import {
  UpdateContractTypeDto,
  UpdateHomeroomTeacherDto,
  UpdateSalaryDto,
  UpdateTeacherDto,
} from './dto/update-teacher.dto';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private readonly teacherRepository: TeacherRepository) {}
  async create(data) {
    return this.teacherRepository.save(data);
  }

  async findAll(query: QueryParamTeacherDto) {
    const conditions = {};
    if (query.class) {
      conditions['class'] = { id: query.class };
    }
    if (query.school) {
      conditions['school'] = { id: query.school };
    }
    return this.teacherRepository.findAllByConditions(conditions, query, { class: true, school: true });
  }

  async findOne(id: number) {
    return this.teacherRepository.findOneByCondition({ where: { id: id } });
  }

  async findOneByUser(user_id: number) {
    return this.teacherRepository.findOneByCondition({ where: { user: { id: user_id } }, relations: { user: true } });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherRepository.update(id, updateTeacherDto);
  }

  async updateHomeroom(id: number, updateTeacherDto: UpdateHomeroomTeacherDto) {
    return this.teacherRepository.update(id, updateTeacherDto);
  }

  async updateContractType(id: number, updateTeacherDto: UpdateContractTypeDto) {
    return this.teacherRepository.update(id, updateTeacherDto);
  }

  async updateSalary(id: number, updateTeacherDto: UpdateSalaryDto) {
    return this.teacherRepository.update(id, updateTeacherDto);
  }

  async remove(id: number) {
    return this.teacherRepository.softDelete(id);
  }
}
