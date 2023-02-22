import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { SubjectRepository } from './subject.repository';
import { subjectProvider } from './subject.provider';

@Module({
  imports: [DatabaseModule],
  providers: [SubjectService, SubjectRepository, ...subjectProvider],
  exports: [SubjectService, SubjectRepository],
  controllers: [SubjectController],
})
export class SubjectModule {}
