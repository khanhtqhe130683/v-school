import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentRepository } from './student.repository';
import { studentProvider } from './student.provider';

@Module({
  imports: [DatabaseModule],
  providers: [StudentService, StudentRepository, ...studentProvider],
  exports: [StudentService, StudentRepository],
  controllers: [StudentController],
})
export class StudentModule {}
