import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { QueryParamFeedbackDto } from './dto/query-param.dto';
import { UpdateFeedbackDto, UpdateReplyFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackRepository } from './feedback.repository';

@Injectable()
export class FeedbackService {
  constructor(private readonly feedbackRepository: FeedbackRepository) {}

  create(createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackRepository.save(createFeedbackDto);
  }

  findAll(query: QueryParamFeedbackDto) {
    const conditions = {};
    if (query.school) {
      conditions['school'] = { id: query.school };
    }
    return this.feedbackRepository.findAllByConditions(conditions, query, { school: true });
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  updateReply(id: number, updateReplyFeedbackDto: UpdateReplyFeedbackDto) {
    return this.feedbackRepository.update(id, updateReplyFeedbackDto);
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackRepository.update(id, updateFeedbackDto);
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
