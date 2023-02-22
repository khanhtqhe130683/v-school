import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { PARENT_CONST } from './parent.constant';
import { ParentEntity } from './entities/parent.entity';

@Injectable()
export class ParentRepository extends TypeOrmRepository<ParentEntity> {
  constructor(
    @Inject(PARENT_CONST.MODEL_PROVIDER)
    parentEntity: Repository<ParentEntity>,
  ) {
    super(parentEntity);
  }
}
