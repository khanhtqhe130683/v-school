import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({
    description: 'name',
    example: '10A',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'grade',
    example: '10',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  grade: number;

  @ApiProperty({
    description: 'school_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  school: string;
}
