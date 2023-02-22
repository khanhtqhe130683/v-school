import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbsenceRequestService } from './absence-request.service';
import { CreateAbsenceRequestDto } from './dto/create-absence-request.dto';
import { QueryParamAbsenceDto } from './dto/query-param.dto';

@Controller('absence-request')
export class AbsenceRequestController {
  constructor(private readonly absenceRequestService: AbsenceRequestService) {}

  @Post()
  create(@Body() createAbsenceRequestDto: CreateAbsenceRequestDto) {
    return this.absenceRequestService.create(createAbsenceRequestDto);
  }

  @Get()
  findAll(@Query() query: QueryParamAbsenceDto) {
    return this.absenceRequestService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.absenceRequestService.findOne(Number(id));
  }

  @Patch(':id')
  approve(@Param('id') id: string) {
    return this.absenceRequestService.approve(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.absenceRequestService.remove(Number(id));
  }
}
