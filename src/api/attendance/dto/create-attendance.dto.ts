import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAttendanceDto {
  @ApiProperty({
    description: 'date',
    example: '03/01/2023',
  })
  @IsNotEmpty()
  @IsString()
  date: string;

  @ApiPropertyOptional({
    description: 'is_attendance',
    example: 'false',
  })
  @IsOptional()
  @IsBoolean()
  is_attendance: boolean;

  @ApiProperty({
    description: 'student_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  student: number;
}
