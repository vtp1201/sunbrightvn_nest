// TaskHasAgentEnum.ts
import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  taskId = 'taskId',
  agentId = 'agentId',
  additionProcessId = 'additionProcessId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
}

export enum COLUMN {
  taskId = 'task_id',
  agentId = 'agent_id',
  additionProcessId = 'addition_process_id',
  createdTime = COLUMN_DEFAULT.createdTime,
}

export enum RELATION {
  additionProcess = RELATION_DEFAULT.additionProcess,
  agent = RELATION_DEFAULT.agent,
  task = RELATION_DEFAULT.task,
}

const tableName = TABLE_NAME.TASK_HAS_AGENT;
export enum INDEX_NAME {
  additionProcessId = `"${tableName}_${COLUMN.additionProcessId}_fkey"`,
  agentId = `"${tableName}_${COLUMN.agentId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
}

export enum INDEX {
  additionProcessId = `@@index([${ATTRIBUTE.additionProcessId}], map: ${INDEX_NAME.additionProcessId})`,
  agentId = `@@index([${ATTRIBUTE.agentId}], map: ${INDEX_NAME.agentId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
