import { Request } from 'express';

import { permission, role, user } from '@prisma/client';

export interface RequestWithUser extends Request {
  user: user;
  roles: role[];
  permissions: permission[];
}

export type JwtVerify = {
  iat: number;
  exp: number;
  data: string;
};

export type StrictPagination = {
  offset: number;
  limit: number;
  page: number;
};

export type Pagination = {
  offset?: number;
  limit?: number;
  page?: number;
};

export type OrderBy<T, K extends keyof T> = {
  [s in K]: 'asc' | 'desc';
};

export type QueryOption<T, K extends keyof T> = {
  pagination: Pagination;
  strictPagination: StrictPagination;
  orderBy: OrderBy<T, K>;
};
