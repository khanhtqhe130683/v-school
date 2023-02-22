import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateSubjectClassDto {
  @ApiPropertyOptional({
    description: 'start_year',
    example: '2018',
  })
  @IsOptional()
  @IsNumber()
  start_year: number;

  @ApiPropertyOptional({
    description: 'semester',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  semester: number;

  @ApiPropertyOptional({
    description: 'subject_id',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subject: number;

  @ApiPropertyOptional({
    description: 'class_id',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  class: number;
}
