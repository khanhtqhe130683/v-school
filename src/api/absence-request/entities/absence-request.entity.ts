import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ABSENCE_REQUEST_CONST } from '../absence-request.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
@Entity({ name: ABSENCE_REQUEST_CONST.MODEL_NAME })
export class AbsenceRequestEntity extends BaseEntity {
  @Column({ default: false })
  is_teacher: boolean;

  @Column()
  date: string;

  @Column({ default: false })
  is_approved: boolean;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'requester_id' })
  user: UserEntity;
}
