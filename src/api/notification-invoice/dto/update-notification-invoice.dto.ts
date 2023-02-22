import { PartialType } from '@nestjs/swagger';
import { CreateNotificationInvoiceDto } from './create-notification-invoice.dto';

export class UpdateNotificationInvoiceDto extends PartialType(CreateNotificationInvoiceDto) {}
