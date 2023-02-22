import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { UserGender } from '../../user/user.constant';
import { ContractType, TeacherStatus } from '../teacher.constant';

export class UpdateTeacherDto {
  @ApiPropertyOptional({
    description: 'first_name',
    example: 'Quoc',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  first_name: string;

  @ApiPropertyOptional({
    description: 'last_name',
    example: 'Khanh',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  last_name: string;

  @ApiPropertyOptional({
    description: 'gender',
    example: '1',
  })
  @IsOptional()
  @IsEnum(UserGender)
  gender: number;

  @ApiPropertyOptional({
    description: 'dob',
    example: '03/04/1999',
  })
  @IsOptional()
  @IsString()
  dob: string;

  @ApiPropertyOptional({
    description: 'phone_number',
    example: '0379416224',
  })
  @IsOptional()
  @IsString()
  phone_number: string;

  @ApiPropertyOptional({
    description: 'email',
    example: 'abc@gmail.com',
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiPropertyOptional({
    description: 'address',
    example: 'Hai Duong',
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiPropertyOptional({
    description: 'status',
    example: '1',
  })
  @IsOptional()
  @IsEnum(TeacherStatus)
  status: number;

  @ApiPropertyOptional({
    description: 'user_id',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  user: number;

  @ApiPropertyOptional({
    description: 'school_id',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  school: number;
}

export class UpdateHomeroomTeacherDto {
  @ApiPropertyOptional({
    description: 'class_id',
    example: '1',
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  class: number;
}

export class UpdateContractTypeDto {
  @ApiPropertyOptional({
    description: 'contract_type',
    example: '1',
  })
  @IsOptional()
  @IsEnum(ContractType)
  contract_type: number;
}

export class UpdateSalaryDto {
  @ApiPropertyOptional({
    description: 'salary',
    example: '10000',
  })
  @IsOptional()
  @IsString()
  salary: string;
}
