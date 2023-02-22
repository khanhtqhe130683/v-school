import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { TeacherClassService } from './teacher-class.service';
import { TeacherClassController } from './teacher-class.controller';
import { TeacherClassRepository } from './teacher-class.repository';
import { teacherClassProvider } from './teacher-class.provider';

@Module({
  imports: [DatabaseModule],
  providers: [TeacherClassService, TeacherClassRepository, ...teacherClassProvider],
  exports: [TeacherClassService, TeacherClassRepository],
  controllers: [TeacherClassController],
})
export class TeacherClassModule {}
