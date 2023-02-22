import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectRepository } from './subject.repository';

@Injectable()
export class SubjectService {
  constructor(private readonly subjectRepository: SubjectRepository) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const { name, grade } = createSubjectDto;
    const existSubject = await this.subjectRepository.findOneByCondition({ where: { name: name, grade: grade } });
    if (existSubject) {
      throw new BadRequestException('This subject existed');
    }
    return this.subjectRepository.save(createSubjectDto);
  }

  findAll() {
    return `This action returns all subject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subject`;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    const { name, grade } = updateSubjectDto;
    const existSubject = await this.subjectRepository.findOneByCondition({ where: { name: name, grade: grade } });
    if (existSubject) {
      throw new BadRequestException('This subject existed');
    }
    return this.subjectRepository.update(id, updateSubjectDto);
  }

  remove(id: number) {
    return this.subjectRepository.softDelete(id);
  }
}
