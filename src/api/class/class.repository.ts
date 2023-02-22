import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { CLASS_CONST } from './class.constant';
import { ClassEntity } from './entities/class.entity';

@Injectable()
export class ClassRepository extends TypeOrmRepository<ClassEntity> {
  constructor(
    @Inject(CLASS_CONST.MODEL_PROVIDER)
    classEntity: Repository<ClassEntity>,
  ) {
    super(classEntity);
  }
}
