import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CLASS_NOTE_CONST } from '../class-note.constant';
import { BaseEntity } from '../../../share/database/base.entity';
import { ClassEntity } from '../../class/entities/class.entity';
@Entity({ name: CLASS_NOTE_CONST.MODEL_NAME })
export class ClassNoteEntity extends BaseEntity {
  @Column({ length: 255 })
  content: string;

  @Column({ default: false })
  is_deleted: boolean;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  class: ClassEntity;
}
