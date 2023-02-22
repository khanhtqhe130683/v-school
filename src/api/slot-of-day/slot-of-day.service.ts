import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { CreateSlotOfDayDto } from './dto/create-slot-of-day.dto';
import { QueryParamSlotDto } from './dto/query-param.dto';
import { UpdateSlotOfDayDto } from './dto/update-slot-of-day.dto';
import { SlotOfDayEntity } from './entities/slot-of-day.entity';
import { SLOT_OF_DAY_CONST } from './slot-of-day.constant';
import { SlotOfDayRepository } from './slot-of-day.repository';

@Injectable()
export class SlotOfDayService {
  constructor(
    private readonly slotOfDayRepository: SlotOfDayRepository,
    @Inject(SLOT_OF_DAY_CONST.MODEL_PROVIDER)
    private repository: Repository<SlotOfDayEntity>,
  ) {}

  async create(createSlotOfDayDto: CreateSlotOfDayDto) {
    const { slot_number, daytime_table } = createSlotOfDayDto;
    const existSlotAndDate = await this.slotOfDayRepository.findOneByConditionRelation(
      { daytime_table: true },
      {
        daytime_table: { id: daytime_table },
        slot_number: slot_number,
      },
    );
    if (existSlotAndDate) {
      throw new BadRequestException('Existed this slot for this day');
      // throw new HttpException(
      //   {
      //     message: ERROR.USER_EXISTED.MESSAGE,
      //     code: ERROR.USER_EXISTED.CODE,
      //   },
      //   HttpStatus.BAD_REQUEST,
      // );
    }
    return this.slotOfDayRepository.save(createSlotOfDayDto);
  }

  async findAll(query: QueryParamSlotDto) {
    // const condition = {
    //   daytime_table: {
    //     id: query.daytime_table,
    //   },
    // };
    // return this.slotOfDayRepository.findAllByConditions(condition, query, {
    //   daytime_table: true,
    //   teacher: true,
    //   subject: true,
    // });
    const slot = await this.repository
      .createQueryBuilder('slot_of_day')
      .leftJoinAndSelect('slot_of_day.daytime_table', 'daytime_table')
      .leftJoinAndSelect('slot_of_day.teacher', 'teacher')
      .leftJoinAndSelect('slot_of_day.subject', 'subject')
      .where('slot_of_day.daytime_table = :id', { id: query.daytime_table })
      .getMany();
    return slot;
  }

  async findOne(id: number) {
    return this.slotOfDayRepository.findOneByCondition({ where: { id: id } });
  }

  async update(id: number, updateSlotOfDayDto: UpdateSlotOfDayDto) {
    const { slot_number, daytime_table } = updateSlotOfDayDto;
    const existSlotAndDate = await this.slotOfDayRepository.findOneByConditionRelation(
      { daytime_table: true },
      {
        daytime_table: { id: daytime_table },
        slot_number: slot_number,
      },
    );
    if (existSlotAndDate) {
      throw new BadRequestException('Existed this slot for this day');
    }
    return this.slotOfDayRepository.update(id, updateSlotOfDayDto);
  }

  async remove(id: number) {
    return this.slotOfDayRepository.softDelete(id);
  }
}
