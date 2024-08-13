import { role, user } from '@prisma/client';

export * from '../user.service';

export type User = user;

export type UserWithRoles = user & {
  roles: role[];
};
