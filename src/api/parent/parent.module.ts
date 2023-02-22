import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { ParentRepository } from './parent.repository';
import { parentProvider } from './parent.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ParentService, ParentRepository, ...parentProvider],
  exports: [ParentService, ParentRepository],
  controllers: [ParentController],
})
export class ParentModule {}
