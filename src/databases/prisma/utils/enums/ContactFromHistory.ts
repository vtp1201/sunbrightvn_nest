import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  customerId = 'customerId',
  contactFromId = 'contactFromId',
  tagName = 'tagName',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  customerId = 'customer_id',
  contactFromId = 'contact_from_id',
  tagName = 'tag_name',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  contactFrom = RELATION_DEFAULT.contactFrom,
  customer = RELATION_DEFAULT.customer,
}

const tableName = TABLE_NAME.CONTACT_FROM_HISTORY;
export enum INDEX_NAME {
  contactFromId = `"${tableName}_${COLUMN.contactFromId}_fkey"`,
  customerId = `"${tableName}_${COLUMN.customerId}_fkey"`,
}

export enum INDEX {
  contactFromId = `@@index([${ATTRIBUTE.contactFromId}], map: ${INDEX_NAME.contactFromId})`,
  customerId = `@@index([${ATTRIBUTE.customerId}], map: ${INDEX_NAME.customerId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
