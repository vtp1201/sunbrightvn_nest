import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS = 'roles';
export const Permissions = (...roles: string[]) =>
  SetMetadata(PERMISSIONS, roles);
