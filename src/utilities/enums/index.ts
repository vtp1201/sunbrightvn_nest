import { ATTRIBUTE_DEFAULT } from '@databases/prisma/utils/enums/default';

export * from './route';
export * from './user';
export * from './role';
export * from './config';
export * from './banking-process';
export * from './error-dictionary';

export enum E_OMIT_DEFAULT {
  id = ATTRIBUTE_DEFAULT.id,
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export const OMIT_DEFAULT = Object.values(E_OMIT_DEFAULT);

export enum E_NODE_ENV {
  DEV = 'dev',
  LOCAL = 'local',
  PRODUCTION = 'production',
  STAGING = 'staging',
}
