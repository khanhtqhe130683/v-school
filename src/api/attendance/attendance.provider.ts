import { DataSource } from 'typeorm';
import { ATTENDANCE_CONST } from './attendance.constant';
import { AttendanceEntity } from './entities/attendance.entity';

export const attendanceProvider = [
  {
    provide: ATTENDANCE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(AttendanceEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
