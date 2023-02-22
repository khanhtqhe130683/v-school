import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { TimeTableService } from './time-table.service';
import { TimeTableController } from './time-table.controller';
import { TimeTableRepository } from './time-table.repository';
import { timeTableProvider } from './time-table.provider';

@Module({
  imports: [DatabaseModule],
  providers: [TimeTableService, TimeTableRepository, ...timeTableProvider],
  exports: [TimeTableService, TimeTableRepository],
  controllers: [TimeTableController],
})
export class TimeTableModule {}
