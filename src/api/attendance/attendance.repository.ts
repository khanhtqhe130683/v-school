import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { ATTENDANCE_CONST } from './attendance.constant';
import { AttendanceEntity } from './entities/attendance.entity';

@Injectable()
export class AttendanceRepository extends TypeOrmRepository<AttendanceEntity> {
  constructor(
    @Inject(ATTENDANCE_CONST.MODEL_PROVIDER)
    attendanceEntity: Repository<AttendanceEntity>,
  ) {
    super(attendanceEntity);
  }
}
