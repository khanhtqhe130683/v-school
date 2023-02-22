import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { NOTIFICATION_INVOICE_CONST } from '../notification-invoice.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { StudentInvoiceEntity } from '../../student-invoice/entities/student-invoice.entity';
@Entity({ name: NOTIFICATION_INVOICE_CONST.MODEL_NAME })
export class NotificationInvoiceEntity extends BaseEntity {
  @ManyToOne(() => StudentInvoiceEntity)
  @JoinColumn({ name: 'student_invoice_id' })
  student_invoice: StudentInvoiceEntity;
}
