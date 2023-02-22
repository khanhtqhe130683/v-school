import { SetMetadata } from '@nestjs/common';
import { ROLE_METADATA } from '../common/app.const';

export const RequireRole = (...role: string[]) => SetMetadata(ROLE_METADATA, role);
