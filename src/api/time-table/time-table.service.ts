import { Injectable } from '@nestjs/common';
import { CreateTimeTableDto } from './dto/create-time-table.dto';
import { UpdateTimeTableDto } from './dto/update-time-table.dto';
import { TimeTableRepository } from './time-table.repository';

@Injectable()
export class TimeTableService {
  constructor(private readonly timeTableRepository: TimeTableRepository) {}

  create(createTimeTableDto: CreateTimeTableDto) {
    return this.timeTableRepository.save(createTimeTableDto);
  }

  findAll() {
    return `This action returns all timeTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeTable`;
  }

  update(id: number, updateTimeTableDto: UpdateTimeTableDto) {
    return this.timeTableRepository.update(id, updateTimeTableDto);
  }

  remove(id: number) {
    return this.timeTableRepository.softDelete(id);
  }
}
