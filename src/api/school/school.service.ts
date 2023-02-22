import { Injectable } from '@nestjs/common';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolRepository } from './school.repository';

@Injectable()
export class SchoolService {
  constructor(private readonly schoolRepository: SchoolRepository) {}
  create(data) {
    return this.schoolRepository.save(data);
  }

  findAll() {
    return `This action returns all school`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
