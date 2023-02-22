import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSlotOfDayDto {
  @ApiProperty({
    description: 'slot_number',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  slot_number: number;

  @ApiProperty({
    description: 'day_session',
    example: 'sang',
  })
  @IsNotEmpty()
  @IsString()
  day_session: string;

  @ApiProperty({
    description: 'daytime_table',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  daytime_table: number;

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
}
