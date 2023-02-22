import { Injectable } from '@nestjs/common';
import { CreateNotificationInvoiceDto } from './dto/create-notification-invoice.dto';
import { UpdateNotificationInvoiceDto } from './dto/update-notification-invoice.dto';

@Injectable()
export class NotificationInvoiceService {
  create(createNotificationInvoiceDto: CreateNotificationInvoiceDto) {
    return 'This action adds a new notificationInvoice';
  }

  findAll() {
    return `This action returns all notificationInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificationInvoice`;
  }

  update(id: number, updateNotificationInvoiceDto: UpdateNotificationInvoiceDto) {
    return `This action updates a #${id} notificationInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificationInvoice`;
  }
}
