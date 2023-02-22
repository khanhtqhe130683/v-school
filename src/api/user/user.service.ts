import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DEFAULT_ADMIN_USER, JWT_CONFIG } from 'src/configs/constant.config';
import { ParentService } from '../parent/parent.service';
import { RoleService } from '../role/role.service';
import { SchoolService } from '../school/school.service';
import { TeacherService } from '../teacher/teacher.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleService: RoleService,
    private readonly teacherService: TeacherService,
    private readonly parentService: ParentService,
    private readonly schoolService: SchoolService,
  ) {}

  async onModuleInit() {
    const userListFound = await this.userRepository.findExistedRecord();
    if (!userListFound.length) {
      const roleAdmin = await this.roleService.findAdminRole();
      await this.userRepository.save({
        username: DEFAULT_ADMIN_USER.username,
        password: await bcrypt.hash(DEFAULT_ADMIN_USER.password, JWT_CONFIG.SALT_ROUNDS),
        role: roleAdmin.id,
      });
    }
  }

  async create(createUserDto: CreateUserDto) {
    const role = await this.roleService.findOneByCondition({ type: createUserDto.role_type });
    const data = {
      username: createUserDto.username,
      password: await bcrypt.hash(createUserDto.password, JWT_CONFIG.SALT_ROUNDS),
      role: role.id,
    };
    try {
      const user = await this.userRepository.save(data);
      switch (createUserDto.role_type) {
        case '2':
          await this.teacherService.create({ user: user.id });
          break;
        case '3':
          await this.parentService.create({ user: user.id });
          break;
        case '4':
          await this.schoolService.create({ user: user.id });
          break;
        default:
          break;
      }
      return user;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return this.userRepository.findOneByCondition({
      where: { id: id },
      relations: { teacher: true },
    });
  }

  async findOneByConditions(conditions: any, relation: any) {
    return this.userRepository.findOneByCondition({ where: conditions, relations: relation });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
