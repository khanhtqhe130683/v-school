import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SchoolType, SCHOOL_CONST } from '../school.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
@Entity({ name: SCHOOL_CONST.MODEL_NAME })
export class SchoolEntity extends BaseEntity {
  @Column({ length: 255, nullable: true })
  name: string;

  @Column({ length: 255, nullable: true })
  msthue: string;

  @Column({ length: 255, nullable: true })
  tinhthanh: string;

  @Column({ length: 255, nullable: true })
  quanhuyen: string;

  @Column({ length: 255, nullable: true })
  xaphuong: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ type: 'enum', enum: SchoolType, nullable: true })
  school_type: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
