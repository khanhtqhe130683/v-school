import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { CLASS_NOTE_CONST } from './class-note.constant';
import { ClassNoteEntity } from './entities/class-note.entity';

@Injectable()
export class ClassNoteRepository extends TypeOrmRepository<ClassNoteEntity> {
  constructor(
    @Inject(CLASS_NOTE_CONST.MODEL_PROVIDER)
    classNoteEntity: Repository<ClassNoteEntity>,
  ) {
    super(classNoteEntity);
  }
}
