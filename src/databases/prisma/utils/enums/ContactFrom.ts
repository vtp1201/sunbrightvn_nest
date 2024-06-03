import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  type = 'type',
  name = 'name',
  description = 'description',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  type = 'type',
  name = 'name',
  description = 'description',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  contactFromHistories = RELATION_DEFAULT.contactFromHistories,
  customers = RELATION_DEFAULT.customers,
  mailchimpTags = RELATION_DEFAULT.mailchimpTags,
}

export default {
  ATTRIBUTE,
  RELATION,
};
