import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumberString } from 'class-validator';
import { QueryParamDto } from '../../../share/common/dto/query-param.dto';

export class QueryParamSlotDto extends QueryParamDto {
  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  daytime_table: string;
}
