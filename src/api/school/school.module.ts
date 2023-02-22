import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { SchoolRepository } from './school.repository';
import { schoolProvider } from './school.provider';

@Module({
  imports: [DatabaseModule],
  providers: [SchoolService, SchoolRepository, ...schoolProvider],
  exports: [SchoolService, SchoolRepository],
  controllers: [SchoolController],
})
export class SchoolModule {}
