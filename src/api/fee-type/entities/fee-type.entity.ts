import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { FeeType, FEE_TYPE_CONST } from '../fee-type.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { SchoolEntity } from '../../school/entities/school.entity';
@Entity({ name: FEE_TYPE_CONST.MODEL_NAME })
export class FeeTypeEntity extends BaseEntity {
  @Column({ length: 255 })
  name_fee: string;

  @Column({ length: 255 })
  content: string;

  @Column({ type: 'enum', enum: FeeType })
  periods_type: number;

  @ManyToOne(() => SchoolEntity)
  @JoinColumn({ name: 'school_id' })
  school: SchoolEntity;
}
