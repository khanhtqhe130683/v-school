import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsNumber } from 'class-validator';
import { QueryParamDto } from '../../../share/common/dto/query-param.dto';

export class QueryParamStudentDto extends QueryParamDto {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  class: number;
}
