import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  companySuffixId = 'companySuffixId',
  taskId = 'taskId',
  companyId = 'companyId',
  isApprove = 'isApprove',
  isSentAgent = 'isSentAgent',
  isSentCustomer = 'isSentCustomer',
  isConfirmed = 'isConfirmed',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  companySuffixId = 'company_suffix_id',
  taskId = 'task_id',
  companyId = 'company_id',
  isApprove = 'is_approve',
  isSentAgent = 'is_sent_agent',
  isSentCustomer = 'is_sent_customer',
  isConfirmed = 'is_confirmed',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  company = RELATION_DEFAULT.company,
  companySuffix = RELATION_DEFAULT.companySuffix,
  task = RELATION_DEFAULT.task,
}

export enum INDEX {
  companyId = `@@index([${ATTRIBUTE.companyId}])`,
  companySuffixId = `@@index([${ATTRIBUTE.companySuffixId}])`,
  taskId = `@@index([${ATTRIBUTE.taskId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
