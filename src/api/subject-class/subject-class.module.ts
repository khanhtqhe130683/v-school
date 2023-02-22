import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { SubjectClassService } from './subject-class.service';
import { SubjectClassController } from './subject-class.controller';
import { SubjectClassRepository } from './subject-class.repository';
import { subjectClassProvider } from './subject-class.provider';

@Module({
  imports: [DatabaseModule],
  providers: [SubjectClassService, SubjectClassRepository, ...subjectClassProvider],
  exports: [SubjectClassService, SubjectClassRepository],
  controllers: [SubjectClassController],
})
export class SubjectClassModule {}
