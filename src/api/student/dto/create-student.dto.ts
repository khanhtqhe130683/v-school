import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { UserGender } from '../../user/user.constant';

export class CreateStudentDto {
  @ApiProperty({
    description: 'name',
    example: 'Truong Quoc Khanh',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'bhyt_num',
    example: '12345679',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  bhyt_num: string;

  @ApiProperty({
    description: 'cmnd',
    example: '030099009925',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  cmnd: string;

  @ApiProperty({
    description: 'cmnd',
    example: '030099009925',
  })
  @IsNotEmpty()
  @IsEnum(UserGender)
  @Type(() => Number)
  gender: number;

  @ApiProperty({
    description: 'student_code',
    example: 'HE130683',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  student_code: string;

  @ApiPropertyOptional({
    description: 'dob',
    example: '03/04/1999',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  dob: string;

  @ApiPropertyOptional({
    description: 'email',
    example: 'abc@gmail.com',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  email: string;

  @ApiPropertyOptional({
    description: 'address',
    example: 'Ha Noi',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  address: string;

  @ApiPropertyOptional({
    description: 'parent_phonenum',
    example: '0379416224',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  parent_phonenum: string;
}
