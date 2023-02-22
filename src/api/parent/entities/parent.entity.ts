import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PARENT_CONST } from '../parent.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { UserGender } from '../../user/user.constant';
import { SchoolEntity } from '../../school/entities/school.entity';
import { UserEntity } from '../../user/entities/user.entity';
@Entity({ name: PARENT_CONST.MODEL_NAME })
export class ParentEntity extends BaseEntity {
  @Column({ length: 255, nullable: true })
  name: string;

  @Column({ type: 'enum', enum: UserGender, default: UserGender.MALE })
  gender: number;

  @Column({ length: 255, nullable: true })
  dob: string;

  @Column({ length: 255, nullable: true })
  phone_number: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @ManyToOne(() => SchoolEntity)
  @JoinColumn({ name: 'school_id' })
  school: SchoolEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
