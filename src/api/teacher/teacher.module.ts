import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherRepository } from './teacher.repository';
import { teacherProvider } from './teacher.provider';

@Module({
  imports: [DatabaseModule],
  providers: [TeacherService, TeacherRepository, ...teacherProvider],
  exports: [TeacherService, TeacherRepository],
  controllers: [TeacherController],
})
export class TeacherModule {}
