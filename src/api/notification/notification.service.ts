import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { QueryParamNotiDto } from './dto/query-param.dto';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  create(createNotificationDto: CreateNotificationDto) {
    return this.notificationRepository.save(createNotificationDto);
  }

  findAll(query: QueryParamNotiDto) {
    const conditions = {};
    if (query.user) {
      conditions['user'] = { id: query.user };
    }
    return this.notificationRepository.findAllByConditions(conditions, query, { user: true });
  }

  findOne(id: number) {
    return this.notificationRepository.findOneByCondition({ where: { id: id } });
  }

  updateIsRead(id: number) {
    return this.notificationRepository.update(id, { is_read: true });
  }

  remove(id: number) {
    return this.notificationRepository.softDelete(id);
  }
}
