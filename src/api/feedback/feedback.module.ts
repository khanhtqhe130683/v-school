import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { FeedbackRepository } from './feedback.repository';
import { feedbackProvider } from './feedback.provider';

@Module({
  imports: [DatabaseModule],
  providers: [FeedbackService, FeedbackRepository, ...feedbackProvider],
  exports: [FeedbackService, FeedbackRepository],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
