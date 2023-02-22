import { Injectable } from '@nestjs/common';
import { AbsenceRequestRepository } from './absence-request.repository';
import { CreateAbsenceRequestDto } from './dto/create-absence-request.dto';
import { QueryParamAbsenceDto } from './dto/query-param.dto';

@Injectable()
export class AbsenceRequestService {
  constructor(private readonly absenceRequestRepository: AbsenceRequestRepository) {}
  async create(createAbsenceRequestDto: CreateAbsenceRequestDto) {
    return this.absenceRequestRepository.save(createAbsenceRequestDto);
  }

  async findAll(query: QueryParamAbsenceDto) {
    const conditions = {};
    if (query.is_teacher) {
      conditions['is_teacher'] = query.is_teacher;
    }
    if (query.date) {
      conditions['date'] = query.date;
    }
    return this.absenceRequestRepository.findAllByConditions(conditions, query, { user: true });
  }

  async findOne(id: number) {
    return `This action returns a #${id} absenceRequest`;
  }

  async approve(id: number) {
    return this.absenceRequestRepository.update(id, { is_approved: true });
  }

  async remove(id: number) {
    return this.absenceRequestRepository.softDelete(id);
  }
}
