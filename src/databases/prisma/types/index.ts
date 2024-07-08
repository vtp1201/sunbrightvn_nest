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
  option?: RelationalFieldOptions;
  isNeedName?: boolean;
};

export type ONE_MANY_MIXIN = {
  relation: string;
  model: PrismaModel;
  fromRelation?: string;
};

export type MANY_MANY_MIXIN = {
  A: {
    attribute: string;
    model: PrismaModel;
  };
  B: {
    attribute: string;
    model: PrismaModel;
  };
  uniqueIndex: string;
};
