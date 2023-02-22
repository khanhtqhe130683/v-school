import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { QueryParamScoreDto } from './dto/query-param.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { ScoreRepository } from './score.repository';

@Injectable()
export class ScoreService {
  constructor(private readonly scoreRepository: ScoreRepository) {}

  async create(createScoreDto: CreateScoreDto) {
    return this.scoreRepository.save(createScoreDto);
  }

  async findAll(query: QueryParamScoreDto) {
    const conditions = {
      student: {
        class: { id: query.class },
      },
    };
    if (query.subject) {
      conditions['subject'] = query.subject;
    }
    if (query.student) {
      conditions.student['id'] = query.student;
    }
    return this.scoreRepository.findAllByConditions(conditions, query, { student: { class: true }, subject: true });
  }

  async findOne(id: number) {
    return this.scoreRepository.findOneByCondition({ where: { id: id } });
  }

  async update(id: number, updateScoreDto: UpdateScoreDto) {
    return this.scoreRepository.update(id, updateScoreDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} score`;
  }
}
