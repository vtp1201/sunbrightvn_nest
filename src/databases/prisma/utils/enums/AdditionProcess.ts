import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  taskId = 'taskId',
  trackingLink = 'trackingLink',
  trackingCode = 'trackingCode',
  serviceTypeIds = 'serviceTypeIds',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  taskId = 'task_id',
  trackingLink = 'tracking_link',
  trackingCode = 'tracking_code',
  serviceTypeIds = 'service_type_ids',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  task = RELATION_DEFAULT.task,
  billings = RELATION_DEFAULT.billings,
  processes = RELATION_DEFAULT.processes,
  agents = RELATION_DEFAULT.agents,
}

export default {
  ATTRIBUTE,
  RELATION,
};
