import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { FeeType } from '../fee-type.constant';

export class CreateFeeTypeDto {
  @ApiProperty({
    description: 'name_fee',
    example: 'abc',
  })
  @IsNotEmpty()
  @IsString()
  name_fee: string;

  @ApiProperty({
    description: 'content',
    example: 'abcd',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: 'periods_type',
    example: '1',
  })
  @IsNotEmpty()
  @IsEnum(FeeType)
  periods_type: number;

  @ApiProperty({
    description: 'school_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  school: number;
}
