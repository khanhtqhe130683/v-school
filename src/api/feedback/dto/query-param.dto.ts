import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsNumber } from 'class-validator';
import { QueryParamDto } from '../../../share/common/dto/query-param.dto';

export class QueryParamFeedbackDto extends QueryParamDto {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  school: number;
}
