import { DataSource } from 'typeorm';
import { STUDENT_INVOICE_CONST } from './student-invoice.constant';
import { StudentInvoiceEntity } from './entities/student-invoice.entity';

export const studentInvoiceProvider = [
  {
    provide: STUDENT_INVOICE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(StudentInvoiceEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
