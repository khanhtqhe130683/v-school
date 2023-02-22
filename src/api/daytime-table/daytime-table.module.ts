import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { DayTimeTableService } from './daytime-table.service';
import { DayTimeTableController } from './daytime-table.controller';
import { DayTimeTableRepository } from './daytime-table.repository';
import { dayTimeTableProvider } from './daytime-table.provider';

@Module({
  imports: [DatabaseModule],
  providers: [DayTimeTableService, DayTimeTableRepository, ...dayTimeTableProvider],
  exports: [DayTimeTableService, DayTimeTableRepository],
  controllers: [DayTimeTableController],
})
export class DayTimeTableModule {}
