import { PartialType } from '@nestjs/swagger';
import { CreateAbsenceRequestDto } from './create-absence-request.dto';

export class UpdateAbsenceRequestDto extends PartialType(CreateAbsenceRequestDto) {}
