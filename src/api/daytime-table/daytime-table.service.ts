import { Injectable, OnModuleInit } from '@nestjs/common';
import { DAY_OF_WEEK_DEFAULT } from './daytime-table.constant';
import { DayTimeTableRepository } from './daytime-table.repository';

@Injectable()
export class DayTimeTableService implements OnModuleInit {
  constructor(private readonly dayTimeTableRepository: DayTimeTableRepository) {}

  async onModuleInit() {
    for (const day of DAY_OF_WEEK_DEFAULT) {
      const daytime_table = await this.dayTimeTableRepository.findOneByCondition({
        where: { date_of_week: day.day_of_week },
      });
      if (!daytime_table) {
        await this.dayTimeTableRepository.save({
          date_of_week: day.day_of_week,
          is_lastest: true,
        });
      }
    }
  }

  findAll() {
    return this.dayTimeTableRepository.findAllByConditions({}, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} daytimeTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} daytimeTable`;
  }
}
