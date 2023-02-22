import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentInvoiceService } from './student-invoice.service';
import { CreateStudentInvoiceDto } from './dto/create-student-invoice.dto';
import { UpdateStudentInvoiceDto } from './dto/update-student-invoice.dto';

@Controller('student-invoice')
export class StudentInvoiceController {
  constructor(private readonly studentInvoiceService: StudentInvoiceService) {}

  @Post()
  create(@Body() createStudentInvoiceDto: CreateStudentInvoiceDto) {
    return this.studentInvoiceService.create(createStudentInvoiceDto);
  }

  @Get()
  findAll() {
    return this.studentInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentInvoiceDto: UpdateStudentInvoiceDto) {
    return this.studentInvoiceService.update(+id, updateStudentInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentInvoiceService.remove(+id);
  }
}
