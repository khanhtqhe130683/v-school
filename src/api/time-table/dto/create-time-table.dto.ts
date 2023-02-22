import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateTimeTableDto {
  @ApiProperty({
    description: 'start_year',
    example: '2021',
  })
  @IsNotEmpty()
  @IsNumberString()
  start_year: string;

  @ApiProperty({
    description: 'end_year',
    example: '2022',
  })
  @IsNotEmpty()
  @IsNumberString()
  end_year: string;

  @ApiProperty({
    description: 'semester',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumberString()
  semester: string;

  @ApiProperty({
    description: 'class_id',
  })
  @IsNumberString()
  @IsNotEmpty()
  class: string;
}
