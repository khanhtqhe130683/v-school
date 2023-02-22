import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Query } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { toFileStream } from 'qrcode';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ROLES } from '../role/role.constant';
import { RequireRole } from 'src/share/decorator/require-permissions.decorator';
import { QueryParamClassDto } from './dto/query-param.dto';

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN)
  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN, ROLES.SCHOOL)
  @Get()
  findAll(@Query() query: QueryParamClassDto) {
    return this.classService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(Number(id), updateClassDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRole(ROLES.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(Number(id));
  }

  @Post('qr')
  qrcode(@Res() res) {
    const qr = toFileStream(res, 'Có đọc được không =))))');
    return qr;
  }
}
