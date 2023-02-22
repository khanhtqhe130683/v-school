import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStudentCommentDto {
  @ApiProperty({
    description: 'content',
    example: 'abcd',
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}
