import { PartialType } from '@nestjs/swagger';
import { CreateTeacherSubjectClassDto } from './create-teacher-subject-class.dto';

export class UpdateTeacherSubjectClassDto extends PartialType(CreateTeacherSubjectClassDto) {}
