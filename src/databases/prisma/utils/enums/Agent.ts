import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  email = 'email',
  countryId = 'countryId',
  agencyId = 'agencyId',
  agentTypeId = 'agentTypeId',
  bankId = 'bankId',
  isHasNominee = 'isHasNominee',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  email = 'email',
  countryId = 'country_id',
  agencyId = 'agency_id',
  agentTypeId = 'agent_type_id',
  bankId = 'bank_id',
  isHasNominee = 'is_has_nominee',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  agency = RELATION_DEFAULT.agency,
  bank = RELATION_DEFAULT.bank,
  country = RELATION_DEFAULT.country,
  agentType = RELATION_DEFAULT.agentType,
  emails = RELATION_DEFAULT.emails,
  processLogs = RELATION_DEFAULT.processLogs,
  taskHasAgents = RELATION_DEFAULT.taskHasAgents,
  tokens = RELATION_DEFAULT.tokens,
}

const tableName = TABLE_NAME.AGENT;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  agencyId = `"${tableName}_${COLUMN.agencyId}_fkey"`,
  agentTypeId = `"${tableName}_${COLUMN.agentTypeId}_fkey"`,
  bankId = `"${tableName}_${COLUMN.bankId}_fkey"`,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  agencyId = `@@index([${ATTRIBUTE.agencyId}], map: ${INDEX_NAME.agencyId})`,
  agentTypeId = `@@index([${ATTRIBUTE.agentTypeId}], map: ${INDEX_NAME.agentTypeId})`,
  bankId = `@@index([${ATTRIBUTE.bankId}], map: ${INDEX_NAME.bankId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
