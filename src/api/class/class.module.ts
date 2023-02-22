import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { ClassRepository } from './class.repository';
import { classProvider } from './class.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ClassService, ClassRepository, ...classProvider],
  exports: [ClassService, ClassRepository],
  controllers: [ClassController],
})
export class ClassModule {}
