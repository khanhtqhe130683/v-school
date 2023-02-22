export const ROLE_CONST = {
  MODEL_NAME: 'roles',
  MODEL_ROLE_COMPANY_NAME: 'company_role',
  MODEL_PROVIDER: 'ROLE_MODEL',
  MODEL_ROLE_COMPANY_PROVIDER: 'ROLE_COMPANY_MODEL',
};

export enum RoleKeys {
  Admin = 1,
  Teacher = 2,
  Parent = 3,
  School = 4,
  Other = 5,
}

export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  PARENT: 'parent',
  SCHOOL: 'school',
  OTHER: 'other',
};

export const ROLES_DEFAULT = [
  {
    name: 'admin',
    type: RoleKeys.Admin,
  },
  {
    name: 'teacher',
    type: RoleKeys.Teacher,
  },
  {
    name: 'parent',
    type: RoleKeys.Parent,
  },
  {
    name: 'school',
    type: RoleKeys.School,
  },
  {
    name: 'other',
    type: RoleKeys.Other,
  },
];
