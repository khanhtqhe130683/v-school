import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configs/database/database.module';
import { StudentModule } from '../student/student.module';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [DatabaseModule, HttpModule, StudentModule],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
