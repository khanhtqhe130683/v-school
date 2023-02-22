import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { StudentStatus } from '../student.constant';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

export class UpdateStudentClassDto {
  @ApiPropertyOptional({
    description: 'class_id',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  class: number;
}

export class UpdateStudentStatusDto {
  @ApiPropertyOptional({
    description: 'status',
    example: '1',
  })
  @IsOptional()
  @IsEnum(StudentStatus)
  status: number;
}
