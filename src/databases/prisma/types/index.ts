import { PrismaModel } from 'schemix';
import { RelationalFieldOptions } from 'schemix/dist/typings/prisma-type-options';

export type INIT_DEFAULT_MIXIN = {
  attribute: string;
  column: string;
};

export type ONE_ONE_MIXIN = {
  attribute: string;
  relation: string;
  model: PrismaModel;
  map?: string;
  option?: RelationalFieldOptions;
  isNeedName?: boolean;
};

export type ONE_MANY_MIXIN = {
  relation: string;
  model: PrismaModel;
  fromRelation?: string;
};

export type MANY_MANY_MIXIN = {
  attributeA: string;
  attributeB: string;
  modelNameA: string;
  modelNameB: string;
};
