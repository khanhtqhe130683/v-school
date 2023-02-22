import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { userProvider } from './user.provider';
import { RoleModule } from '../role/role.module';
import { TeacherModule } from '../teacher/teacher.module';
import { ParentModule } from '../parent/parent.module';
import { SchoolModule } from '../school/school.module';

@Module({
  imports: [DatabaseModule, RoleModule, TeacherModule, ParentModule, SchoolModule],
  providers: [UserService, UserRepository, ...userProvider],
  exports: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
