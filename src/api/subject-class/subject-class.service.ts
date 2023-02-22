import { Injectable } from '@nestjs/common';
import { CreateSubjectClassDto } from './dto/create-subject-class.dto';
import { UpdateSubjectClassDto } from './dto/update-subject-class.dto';
import { SubjectClassRepository } from './subject-class.repository';

@Injectable()
export class SubjectClassService {
  constructor(private readonly subjectClassRepository: SubjectClassRepository) {}

  create(createSubjectClassDto: CreateSubjectClassDto) {
    return this.subjectClassRepository.save(createSubjectClassDto);
  }

  findAll() {
    return `This action returns all subjectClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subjectClass`;
  }

  update(id: number, updateSubjectClassDto: UpdateSubjectClassDto) {
    return this.subjectClassRepository.update(id, updateSubjectClassDto);
  }

  remove(id: number) {
    return this.subjectClassRepository.softDelete(id);
  }
}
