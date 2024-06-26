import { permission, role, user } from '@prisma/client';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: user;
  roles: role[];
  permissions: permission[];
}
