import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'username',
    example: 'bach.nguyen@vmodev.com',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  username: string;

  @ApiProperty({
    description: 'password',
    example: '12345678',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  password: string;
}
