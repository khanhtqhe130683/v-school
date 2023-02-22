import { PartialType } from '@nestjs/swagger';
import { CreateDaytimeTableDto } from './create-daytime-table.dto';

export class UpdateDaytimeTableDto extends PartialType(CreateDaytimeTableDto) {}
