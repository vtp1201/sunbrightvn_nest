// TaskHasAgentEnum.ts
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

export default {
  ATTRIBUTE,
  RELATION,
};
