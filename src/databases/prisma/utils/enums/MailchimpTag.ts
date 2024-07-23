import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  contactFromId = 'contactFromId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  contactFromId = 'contact_from_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  contactFrom = RELATION_DEFAULT.contactFrom,
}

const tableName = TABLE_NAME.MAILCHIMP_TAG;
export enum INDEX_NAME {
  contactFromId = `"${tableName}_${COLUMN.contactFromId}_fkey"`,
}

export enum INDEX {
  contactFromId = `@@index([${ATTRIBUTE.contactFromId}], map: ${INDEX_NAME.contactFromId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
