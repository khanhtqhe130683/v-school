import { PartialType } from '@nestjs/swagger';
import { CreateSlotOfDayDto } from './create-slot-of-day.dto';

export class UpdateSlotOfDayDto extends PartialType(CreateSlotOfDayDto) {}
