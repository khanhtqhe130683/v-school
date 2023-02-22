import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAbsenceRequestDto {
  @ApiPropertyOptional({
    description: 'is_teacher',
    example: 'false',
  })
  @IsOptional()
  @IsBoolean()
  is_teacher: boolean;

  @ApiProperty({
    description: 'date',
    example: '03/01/2023',
  })
  @IsNotEmpty()
  @IsString()
  date: string;

  @ApiProperty({
    description: 'user_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  user: number;
}
