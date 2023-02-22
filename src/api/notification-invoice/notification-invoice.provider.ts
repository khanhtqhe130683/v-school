import { DataSource } from 'typeorm';
import { NOTIFICATION_INVOICE_CONST } from './notification-invoice.constant';
import { NotificationInvoiceEntity } from './entities/notification-invoice.entity';

export const notificationInvoiceProvider = [
  {
    provide: NOTIFICATION_INVOICE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(NotificationInvoiceEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
