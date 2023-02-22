import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { TeacherSubjectClassService } from './teacher-subject-class.service';
import { TeacherSubjectClassController } from './teacher-subject-class.controller';
import { TeacherSubjectClassRepository } from './teacher-subject-class.repository';
import { teacherSubjectClassProvider } from './teacher-subject-class.provider';

@Module({
  imports: [DatabaseModule],
  providers: [TeacherSubjectClassService, TeacherSubjectClassRepository, ...teacherSubjectClassProvider],
  exports: [TeacherSubjectClassService, TeacherSubjectClassRepository],
  controllers: [TeacherSubjectClassController],
})
export class TeacherSubjectClassModule {}
