import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { StudentCommentService } from './student-comment.service';
import { StudentCommentController } from './student-comment.controller';
import { StudentCommentRepository } from './student-comment.repository';
import { studentCommentProvider } from './student-comment.provider';

@Module({
  imports: [DatabaseModule],
  providers: [StudentCommentService, StudentCommentRepository, ...studentCommentProvider],
  exports: [StudentCommentService, StudentCommentRepository],
  controllers: [StudentCommentController],
})
export class StudentCommentModule {}
