import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { QueryParamDto } from '../../../share/common/dto/query-param.dto';

export class QueryParamAttendanceDto extends QueryParamDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  date: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  student: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  class: number;
}
