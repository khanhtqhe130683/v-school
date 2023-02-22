import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { QueryParamStudentDto } from './dto/query-param.dto';
import { UpdateStudentClassDto, UpdateStudentDto, UpdateStudentStatusDto } from './dto/update-student.dto';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(createStudentDto: CreateStudentDto) {
    const { bhyt_num, cmnd, student_code } = createStudentDto;
    const existedStudent = await this.studentRepository.findOneByCondition({
      where: [{ bhyt_num: bhyt_num }, { cmnd: cmnd }, { student_code: student_code }],
    });
    if (existedStudent) {
      throw new BadRequestException('There student existed!');
    }
    return this.studentRepository.save(createStudentDto);
  }

  async findAll(query: QueryParamStudentDto) {
    const conditions = {};
    if (query.class) {
      conditions['class'] = { id: query.class };
    }
    return this.studentRepository.findAllByConditions(conditions, query, { class: true });
  }

  async findAllByCondition(conditions) {
    return this.studentRepository.findAllByConditions(conditions, {}, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async findOneByCondition(condition) {
    return this.studentRepository.findOneByCondition({ where: condition });
  }

  async updateStatus(id: number, updateStudentDto: UpdateStudentStatusDto) {
    return this.studentRepository.update(id, updateStudentDto);
  }

  async updateClass(id: number, updateStudentDto: UpdateStudentClassDto) {
    return this.studentRepository.update(id, updateStudentDto);
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const { bhyt_num, cmnd, student_code } = updateStudentDto;
    const existedStudent = await this.studentRepository.findOneByCondition({
      where: [{ bhyt_num: bhyt_num }, { cmnd: cmnd }, { student_code: student_code }],
    });
    if (existedStudent) {
      throw new BadRequestException('There student existed!');
    }
    return this.studentRepository.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.studentRepository.softDelete(id);
  }
}
