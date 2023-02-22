import { Module } from '@nestjs/common';

import { RoleService } from './role.service';
// import { RoleController } from './role.controller';
import { DatabaseModule } from '../../configs/database/database.module';
import { RolesRepository } from './role.repository';
import { rolesProvider } from './role.provider';

@Module({
  imports: [DatabaseModule],
  // controllers: [RoleController],
  providers: [RoleService, RolesRepository, ...rolesProvider],
  exports: [RoleService],
})
export class RoleModule {}
