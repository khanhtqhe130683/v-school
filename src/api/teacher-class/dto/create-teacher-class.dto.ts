import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeacherClassDto {
  @ApiProperty({
    description: 'teacher_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  teacher: number;

  @ApiProperty({
    description: 'subject_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  subject: number;

  @ApiProperty({
    description: 'class_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  class: number;
}
