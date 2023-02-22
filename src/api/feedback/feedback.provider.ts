import { DataSource } from 'typeorm';
import { FEEDBACK_CONST } from './feedback.constant';
import { FeedbackEntity } from './entities/feedback.entity';

export const feedbackProvider = [
  {
    provide: FEEDBACK_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(FeedbackEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
