import { Injectable } from '@nestjs/common';
import { UpdateParentDto } from './dto/update-parent.dto';
import { ParentRepository } from './parent.repository';

@Injectable()
export class ParentService {
  constructor(private readonly parentRepository: ParentRepository) {}
  create(data) {
    return this.parentRepository.save(data);
  }

  findAll() {
    return `This action returns all parent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parent`;
  }

  update(id: number, updateParentDto: UpdateParentDto) {
    return `This action updates a #${id} parent`;
  }

  remove(id: number) {
    return `This action removes a #${id} parent`;
  }
}
