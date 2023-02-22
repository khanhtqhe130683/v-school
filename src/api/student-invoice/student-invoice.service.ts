import { Injectable } from '@nestjs/common';
import { CreateStudentInvoiceDto } from './dto/create-student-invoice.dto';
import { UpdateStudentInvoiceDto } from './dto/update-student-invoice.dto';

@Injectable()
export class StudentInvoiceService {
  create(createStudentInvoiceDto: CreateStudentInvoiceDto) {
    return 'This action adds a new studentInvoice';
  }

  findAll() {
    return `This action returns all studentInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentInvoice`;
  }

  update(id: number, updateStudentInvoiceDto: UpdateStudentInvoiceDto) {
    return `This action updates a #${id} studentInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentInvoice`;
  }
}
