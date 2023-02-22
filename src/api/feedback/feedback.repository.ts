import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { FEEDBACK_CONST } from './feedback.constant';
import { FeedbackEntity } from './entities/feedback.entity';

@Injectable()
export class FeedbackRepository extends TypeOrmRepository<FeedbackEntity> {
  constructor(
    @Inject(FEEDBACK_CONST.MODEL_PROVIDER)
    feedbackEntity: Repository<FeedbackEntity>,
  ) {
    super(feedbackEntity);
  }
}
