import { PartialType } from '@nestjs/swagger';
import { CreateStudentInvoiceDto } from './create-student-invoice.dto';

export class UpdateStudentInvoiceDto extends PartialType(CreateStudentInvoiceDto) {}
