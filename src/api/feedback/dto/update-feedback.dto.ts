import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFeedbackDto {
  @ApiPropertyOptional({
    description: 'content',
    example: 'abc',
  })
  @IsOptional()
  @IsString()
  content: string;
}

export class UpdateReplyFeedbackDto {
  @ApiPropertyOptional({
    description: 'reply_content',
    example: 'abc',
  })
  @IsOptional()
  @IsString()
  reply_content: string;
}
