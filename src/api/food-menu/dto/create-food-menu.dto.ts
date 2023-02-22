import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFoodMenuDto {
  @ApiProperty({
    description: 'class_id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  class: number;
}
