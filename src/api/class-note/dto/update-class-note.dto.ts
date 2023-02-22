import { PartialType } from '@nestjs/swagger';
import { CreateClassNoteDto } from './create-class-note.dto';

export class UpdateClassNoteDto extends PartialType(CreateClassNoteDto) {}
