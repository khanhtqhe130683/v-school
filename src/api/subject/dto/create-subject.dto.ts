import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({
    description: 'subject_name',
    example: 'Toan',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'grade',
    example: '10',
  })
  @IsNotEmpty()
  @IsNumberString()
  grade: string;
}
