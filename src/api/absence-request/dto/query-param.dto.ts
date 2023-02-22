import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsBoolean, IsString } from 'class-validator';
import { QueryParamDto } from '../../../share/common/dto/query-param.dto';

export class QueryParamAbsenceDto extends QueryParamDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  is_teacher: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  date: string;
}
