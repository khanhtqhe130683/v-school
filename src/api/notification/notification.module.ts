import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NotificationRepository } from './notification.repository';
import { notificationProvider } from './notification.provider';

@Module({
  imports: [DatabaseModule],
  providers: [NotificationService, NotificationRepository, ...notificationProvider],
  exports: [NotificationService, NotificationRepository],
  controllers: [NotificationController],
})
export class NotificationModule {}
