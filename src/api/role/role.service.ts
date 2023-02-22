import { Injectable, OnModuleInit } from '@nestjs/common';
import { RoleKeys, ROLES_DEFAULT } from './role.constant';
import { RolesRepository } from './role.repository';

@Injectable()
export class RoleService implements OnModuleInit {
  constructor(private readonly roleRepository: RolesRepository) {}

  async onModuleInit() {
    const rolesListExisted = await this.roleRepository.findAllByConditions({}, {});
    if (rolesListExisted.data.length === ROLES_DEFAULT.length) return true;

    for (const role of ROLES_DEFAULT) {
      const roleExisted = await this.roleRepository.findOneByCondition({ where: { name: role.name } });
      if (!roleExisted) {
        await this.roleRepository.save({
          name: role.name,
          type: role.type,
        });
      }
    }
  }

  public async findAdminRole() {
    return this.roleRepository.findOneByCondition({
      where: {
        type: RoleKeys.Admin,
      },
    });
  }

  public async findOneByCondition(condition) {
    return this.roleRepository.findOneByCondition({ where: condition });
  }
}
