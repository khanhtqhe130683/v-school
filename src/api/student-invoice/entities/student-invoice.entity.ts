import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { STUDENT_INVOICE_CONST } from '../student-invoice.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { StudentEntity } from '../../student/entities/student.entity';
import { FeeTypeEntity } from '../../fee-type/entities/fee-type.entity';
@Entity({ name: STUDENT_INVOICE_CONST.MODEL_NAME })
export class StudentInvoiceEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  content: string;

  @Column({ length: 100 })
  cost: string;

  @Column({ default: true })
  status: boolean;

  @Column({ length: 100 })
  payment_date: string;

  @Column({ length: 255 })
  qr_url: string;

  @Column({ length: 255 })
  school_mst: string;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;

  @ManyToOne(() => FeeTypeEntity)
  @JoinColumn({ name: 'fee_type_id' })
  fee_type: FeeTypeEntity;
}
