import { DataSource } from 'typeorm';
import { SCORE_CONST } from './score.constant';
import { ScoreEntity } from './entities/score.entity';

export const scoreProvider = [
  {
    provide: SCORE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(ScoreEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
