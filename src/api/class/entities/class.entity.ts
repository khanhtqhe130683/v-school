import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CLASS_CONST } from '../class.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { SchoolEntity } from '../../school/entities/school.entity';
@Entity({ name: CLASS_CONST.MODEL_NAME })
export class ClassEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column()
  grade: number;

  @ManyToOne(() => SchoolEntity)
  @JoinColumn({ name: 'school_id' })
  school: SchoolEntity;
}
