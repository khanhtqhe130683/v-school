import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDishDto {
  @ApiProperty({
    description: 'dish_name',
    example: 'Trung Chien',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  dish_name: string;
}
