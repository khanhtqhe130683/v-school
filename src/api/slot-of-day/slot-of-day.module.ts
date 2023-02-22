import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { SlotOfDayService } from './slot-of-day.service';
import { SlotOfDayController } from './slot-of-day.controller';
import { SlotOfDayRepository } from './slot-of-day.repository';
import { slotOfDayProvider } from './slot-of-day.provider';

@Module({
  imports: [DatabaseModule],
  providers: [SlotOfDayService, SlotOfDayRepository, ...slotOfDayProvider],
  exports: [SlotOfDayService, SlotOfDayRepository],
  controllers: [SlotOfDayController],
})
export class SlotOfDayModule {}
