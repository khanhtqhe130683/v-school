import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto, UpdateReplyFeedbackDto } from './dto/update-feedback.dto';
import { QueryParamFeedbackDto } from './dto/query-param.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  findAll(@Query() query: QueryParamFeedbackDto) {
    return this.feedbackService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbackService.findOne(Number(id));
  }

  @Patch(':id/reply')
  updateReply(@Param('id') id: string, @Body() updateReplyFeedbackDto: UpdateReplyFeedbackDto) {
    return this.feedbackService.updateReply(Number(id), updateReplyFeedbackDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackService.update(Number(id), updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbackService.remove(+id);
  }
}
