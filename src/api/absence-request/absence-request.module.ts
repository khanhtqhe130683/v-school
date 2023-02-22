import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { AbsenceRequestService } from './absence-request.service';
import { AbsenceRequestController } from './absence-request.controller';
import { AbsenceRequestRepository } from './absence-request.repository';
import { absenceRequestProvider } from './absence-request.provider';

@Module({
  imports: [DatabaseModule],
  providers: [AbsenceRequestService, AbsenceRequestRepository, ...absenceRequestProvider],
  exports: [AbsenceRequestService, AbsenceRequestRepository],
  controllers: [AbsenceRequestController],
})
export class AbsenceRequestModule {}
