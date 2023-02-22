import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { SCORE_CONST } from './score.constant';
import { ScoreEntity } from './entities/score.entity';

@Injectable()
export class ScoreRepository extends TypeOrmRepository<ScoreEntity> {
  constructor(
    @Inject(SCORE_CONST.MODEL_PROVIDER)
    scoreEntity: Repository<ScoreEntity>,
  ) {
    super(scoreEntity);
  }
}
