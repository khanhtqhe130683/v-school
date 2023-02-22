import { Injectable } from '@nestjs/common';
import { AttendanceRepository } from './attendance.repository';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { QueryParamAttendanceDto } from './dto/query-param.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly attendanceRepository: AttendanceRepository) {}

  create(createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceRepository.save(createAttendanceDto);
  }

  findAll(query: QueryParamAttendanceDto) {
    const conditions = {
      student: {
        class: { id: query.class },
      },
    };
    if (query.date) {
      conditions['date'] = query.date;
    }
    if (query.student) {
      conditions.student['id'] = query.student;
    }
    return this.attendanceRepository.findAllByConditions(conditions, query, { student: { class: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceRepository.update(id, updateAttendanceDto);
  }

  updateMany(updateAttendanceDto: UpdateAttendanceDto) {
    const ids = ['1', '2', '3'];
    return this.attendanceRepository.update(ids, updateAttendanceDto);
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
