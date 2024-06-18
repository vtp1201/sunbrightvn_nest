import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  entityName = 'entityName',
}

export enum COLUMN {
  id = 'id',
  entityName = 'entity_name',
}

export enum RELATION {}

export enum INDEX {
  entityName = `@@index([${ATTRIBUTE.entityName}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
