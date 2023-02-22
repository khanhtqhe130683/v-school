import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { NOTIFICATION_CONST } from './notification.constant';
import { NotificationEntity } from './entities/notification.entity';

@Injectable()
export class NotificationRepository extends TypeOrmRepository<NotificationEntity> {
  constructor(
    @Inject(NOTIFICATION_CONST.MODEL_PROVIDER)
    notificationEntity: Repository<NotificationEntity>,
  ) {
    super(notificationEntity);
  }
}
