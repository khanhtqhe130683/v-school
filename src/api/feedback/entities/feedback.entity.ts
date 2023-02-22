import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { FEEDBACK_CONST } from '../feedback.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { SchoolEntity } from '../../school/entities/school.entity';
@Entity({ name: FEEDBACK_CONST.MODEL_NAME })
export class FeedbackEntity extends BaseEntity {
  @Column({ length: 2555 })
  content: string;

  @Column({ length: 2555, nullable: true })
  reply_content: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'reporter_id' })
  user: UserEntity;

  @ManyToOne(() => SchoolEntity)
  @JoinColumn({ name: 'school_id' })
  school: SchoolEntity;
}
