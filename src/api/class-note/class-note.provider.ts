import { DataSource } from 'typeorm';
import { CLASS_NOTE_CONST } from './class-note.constant';
import { ClassNoteEntity } from './entities/class-note.entity';

export const classNoteProvider = [
  {
    provide: CLASS_NOTE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(ClassNoteEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
