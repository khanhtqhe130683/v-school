import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { TeacherSubjectService } from './teacher-subject.service';
import { TeacherSubjectRepository } from './teacher-subject.repository';
import { teacherSubjectProvider } from './teacher-subject.provider';

@Module({
  imports: [DatabaseModule],
  providers: [TeacherSubjectService, TeacherSubjectRepository, ...teacherSubjectProvider],
  exports: [TeacherSubjectService, TeacherSubjectRepository],
})
export class TeacherSubjectModule {}
