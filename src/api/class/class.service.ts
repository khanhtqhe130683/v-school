import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CLASS_CONST } from './class.constant';
import { ClassRepository } from './class.repository';
import { CreateClassDto } from './dto/create-class.dto';
import { QueryParamClassDto } from './dto/query-param.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassEntity } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    private readonly classRepository: ClassRepository,
    @Inject(CLASS_CONST.MODEL_PROVIDER)
    private repository: Repository<ClassEntity>,
  ) {}
  async create(createClassDto: CreateClassDto) {
    return this.classRepository.save(createClassDto);
  }

  async findAll(query: QueryParamClassDto) {
    const conditions = {};
    if (query.school) {
      conditions['school'] = { id: query.school };
    }
    return this.classRepository.findAllByConditions(conditions, query, { school: true });
  }

  async findOne(id: number) {
    return this.classRepository.findOneByCondition({ where: { id: id } });
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    return this.classRepository.update(id, updateClassDto);
  }

  async remove(id: number) {
    return this.classRepository.softDelete(id);
  }
}
