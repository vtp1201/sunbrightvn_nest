import { TABLE_NAME } from '../constants';
import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  processStepId = 'processStepId',
  roleId = 'roleId',
  isMain = 'isMain',
}

export enum COLUMN {
  processStepId = 'process_step_id',
  roleId = 'role_id',
  isMain = 'is_main',
}

export enum RELATION {
  processStep = RELATION_DEFAULT.processStep,
  role = RELATION_DEFAULT.role,
}

const tableName = TABLE_NAME.PROCESS_STEP_HAS_ROLE;
export enum INDEX_NAME {
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
  roleId = `"${tableName}_${COLUMN.roleId}_fkey"`,
}

export enum INDEX {
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
  roleId = `@@index([${ATTRIBUTE.roleId}], map: ${INDEX_NAME.roleId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
