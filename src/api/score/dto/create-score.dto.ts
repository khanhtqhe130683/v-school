import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { ScoreType } from '../score.constant';

export class CreateScoreDto {
  @ApiProperty({
    description: 'score_number',
    example: '10',
  })
  @IsNotEmpty()
  @IsNumber()
  score_number: number;

  @ApiProperty({
    description: 'semester',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  semester: number;

  @ApiProperty({
    description: 'start_study_year',
    example: '2022',
  })
  @IsNotEmpty()
  @IsNumber()
  start_study_year: number;

  @ApiProperty({
    description: 'score_type',
    example: '1',
  })
  @IsNotEmpty()
  @IsEnum(ScoreType)
  @Type(() => Number)
  score_type: number;

  @ApiProperty({
    description: 'student_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  student: number;

  @ApiProperty({
    description: 'subject_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  subject: number;
}
