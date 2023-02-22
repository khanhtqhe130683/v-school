import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { NOTIFICATION_INVOICE_CONST } from './notification-invoice.constant';
import { NotificationInvoiceEntity } from './entities/notification-invoice.entity';

@Injectable()
export class NotificationInvoiceRepository extends TypeOrmRepository<NotificationInvoiceEntity> {
  constructor(
    @Inject(NOTIFICATION_INVOICE_CONST.MODEL_PROVIDER)
    notificationInvoiceEntity: Repository<NotificationInvoiceEntity>,
  ) {
    super(notificationInvoiceEntity);
  }
}
