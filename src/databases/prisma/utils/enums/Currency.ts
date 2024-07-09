import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  code = 'code',
  symbol = 'symbol',
  exchangeRate = 'exchangeRate',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  code = 'code',
  symbol = 'symbol',
  exchangeRate = 'exchange_rate',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companies = RELATION_DEFAULT.companies,
  websites = RELATION_DEFAULT.websites,
}

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
