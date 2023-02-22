import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { NOTIFICATION_CONST } from '../notification.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
@Entity({ name: NOTIFICATION_CONST.MODEL_NAME })
export class NotificationEntity extends BaseEntity {
  @Column({ length: 255 })
  content: string;

  @Column({ default: false })
  is_read: boolean;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'receiver_id' })
  user: UserEntity;
}
