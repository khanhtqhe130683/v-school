import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { StudentInvoiceService } from './student-invoice.service';
import { StudentInvoiceController } from './student-invoice.controller';
import { StudentInvoiceRepository } from './student-invoice.repository';
import { studentInvoiceProvider } from './student-invoice.provider';

@Module({
  imports: [DatabaseModule],
  providers: [StudentInvoiceService, StudentInvoiceRepository, ...studentInvoiceProvider],
  exports: [StudentInvoiceService, StudentInvoiceRepository],
  controllers: [StudentInvoiceController],
})
export class StudentInvoiceModule {}
