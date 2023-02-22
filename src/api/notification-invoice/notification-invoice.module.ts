import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { NotificationInvoiceService } from './notification-invoice.service';
import { NotificationInvoiceController } from './notification-invoice.controller';
import { NotificationInvoiceRepository } from './notification-invoice.repository';
import { notificationInvoiceProvider } from './notification-invoice.provider';

@Module({
  imports: [DatabaseModule],
  providers: [NotificationInvoiceService, NotificationInvoiceRepository, ...notificationInvoiceProvider],
  exports: [NotificationInvoiceService, NotificationInvoiceRepository],
  controllers: [NotificationInvoiceController],
})
export class NotificationInvoiceModule {}
