import { DataSource } from 'typeorm';
import { NOTIFICATION_CONST } from './notification.constant';
import { NotificationEntity } from './entities/notification.entity';

export const notificationProvider = [
  {
    provide: NOTIFICATION_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(NotificationEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
