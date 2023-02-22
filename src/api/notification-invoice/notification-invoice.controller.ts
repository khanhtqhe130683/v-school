import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationInvoiceService } from './notification-invoice.service';
import { CreateNotificationInvoiceDto } from './dto/create-notification-invoice.dto';
import { UpdateNotificationInvoiceDto } from './dto/update-notification-invoice.dto';

@Controller('notification-invoice')
export class NotificationInvoiceController {
  constructor(private readonly notificationInvoiceService: NotificationInvoiceService) {}

  @Post()
  create(@Body() createNotificationInvoiceDto: CreateNotificationInvoiceDto) {
    return this.notificationInvoiceService.create(createNotificationInvoiceDto);
  }

  @Get()
  findAll() {
    return this.notificationInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationInvoiceDto: UpdateNotificationInvoiceDto) {
    return this.notificationInvoiceService.update(+id, updateNotificationInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationInvoiceService.remove(+id);
  }
}
