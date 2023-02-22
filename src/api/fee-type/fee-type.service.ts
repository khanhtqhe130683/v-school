import { Injectable } from '@nestjs/common';
import { CreateFeeTypeDto } from './dto/create-fee-type.dto';
import { UpdateFeeTypeDto } from './dto/update-fee-type.dto';
import { FeeTypeRepository } from './fee-type.repository';

@Injectable()
export class FeeTypeService {
  constructor(private readonly feeTypeRepository: FeeTypeRepository) {}

  create(createFeeTypeDto: CreateFeeTypeDto) {
    return this.feeTypeRepository.save(createFeeTypeDto);
  }

  findAll() {
    return `This action returns all feeType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feeType`;
  }

  update(id: number, updateFeeTypeDto: UpdateFeeTypeDto) {
    return this.feeTypeRepository.update(id, updateFeeTypeDto);
  }

  remove(id: number) {
    return this.feeTypeRepository.softDelete(id);
  }
}
