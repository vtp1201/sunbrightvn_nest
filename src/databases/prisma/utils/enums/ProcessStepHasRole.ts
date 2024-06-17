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

export default {
  ATTRIBUTE,
  RELATION,
};
