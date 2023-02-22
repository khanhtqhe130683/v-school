import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateNotificationDto {
  @ApiPropertyOptional({
    description: 'content',
    example: 'abcd',
  })
  @IsOptional()
  @IsBoolean()
  is_read: string;
}
