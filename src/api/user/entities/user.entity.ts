import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { USER_CONST } from '../user.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { RoleEntity } from '../../role/entities/role.entity';
@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  username: string;

  @Column({ length: 100 })
  @Exclude()
  password: string;

  @ManyToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;
}
