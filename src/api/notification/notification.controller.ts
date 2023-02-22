import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { QueryParamNotiDto } from './dto/query-param.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  findAll(@Query() query: QueryParamNotiDto) {
    return this.notificationService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.notificationService.updateIsRead(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(Number(id));
  }
}
