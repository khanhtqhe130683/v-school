import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { FeeTypeService } from './fee-type.service';
import { FeeTypeController } from './fee-type.controller';
import { FeeTypeRepository } from './fee-type.repository';
import { feeTypeProvider } from './fee-type.provider';

@Module({
  imports: [DatabaseModule],
  providers: [FeeTypeService, FeeTypeRepository, ...feeTypeProvider],
  exports: [FeeTypeService, FeeTypeRepository],
  controllers: [FeeTypeController],
})
export class FeeTypeModule {}
