import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { StudentClassService } from './student-class.service';
import { StudentClassController } from './student-class.controller';
import { StudentClassRepository } from './student-class.repository';
import { studentClassProvider } from './student-class.provider';

@Module({
  imports: [DatabaseModule],
  providers: [StudentClassService, StudentClassRepository, ...studentClassProvider],
  exports: [StudentClassService, StudentClassRepository],
  controllers: [StudentClassController],
})
export class StudentClassModule {}
