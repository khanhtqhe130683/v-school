import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { ScoreRepository } from './score.repository';
import { scoreProvider } from './score.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ScoreService, ScoreRepository, ...scoreProvider],
  exports: [ScoreService, ScoreRepository],
  controllers: [ScoreController],
})
export class ScoreModule {}
