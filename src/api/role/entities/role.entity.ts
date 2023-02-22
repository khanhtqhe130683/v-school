import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../share/database/base.entity';
import { RoleKeys, ROLE_CONST } from '../role.constant';

@Entity({ name: ROLE_CONST.MODEL_NAME })
export class RoleEntity extends BaseEntity {
  @Column({ length: 255, unique: true })
  name: string;

  @Column({ type: 'enum', enum: RoleKeys })
  type: number;
}
