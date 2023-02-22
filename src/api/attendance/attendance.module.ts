import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { AttendanceRepository } from './attendance.repository';
import { attendanceProvider } from './attendance.provider';

@Module({
  imports: [DatabaseModule],
  providers: [AttendanceService, AttendanceRepository, ...attendanceProvider],
  exports: [AttendanceService, AttendanceRepository],
  controllers: [AttendanceController],
})
export class AttendanceModule {}
