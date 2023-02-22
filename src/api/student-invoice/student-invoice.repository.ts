import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { STUDENT_INVOICE_CONST } from './student-invoice.constant';
import { StudentInvoiceEntity } from './entities/student-invoice.entity';

@Injectable()
export class StudentInvoiceRepository extends TypeOrmRepository<StudentInvoiceEntity> {
  constructor(
    @Inject(STUDENT_INVOICE_CONST.MODEL_PROVIDER)
    studentInvoiceEntity: Repository<StudentInvoiceEntity>,
  ) {
    super(studentInvoiceEntity);
  }
}
