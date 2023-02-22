import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { ClassNoteService } from './class-note.service';
import { ClassNoteController } from './class-note.controller';
import { ClassNoteRepository } from './class-note.repository';
import { classNoteProvider } from './class-note.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ClassNoteService, ClassNoteRepository, ...classNoteProvider],
  exports: [ClassNoteService, ClassNoteRepository],
  controllers: [ClassNoteController],
})
export class ClassNoteModule {}
