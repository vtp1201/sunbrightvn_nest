import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyId = 'companyId',
  serviceId = 'serviceId',
  name = 'name',
  description = 'description',
  dateCompleted = 'dateCompleted',
  dueDate = 'dueDate',
  dateRemind = 'dateRemind',
  orderId = 'orderId',
  isNotShow = 'isNotShow',
  companyEventTypeId = 'companyEventTypeId',
  isNotifyDueRenewal = 'isNotifyDueRenewal',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  companyId = 'company_id',
  serviceId = 'service_id',
  name = 'name',
  description = 'description',
  dateCompleted = 'date_completed',
  dueDate = 'due_date',
  dateRemind = 'date_remind',
  orderId = 'order_id',
  isNotShow = 'is_not_show',
  companyEventTypeId = 'company_event_type_id',
  isNotifyDueRenewal = 'is_notify_due_renewal',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  companyEventType = RELATION_DEFAULT.companyEventType,
  company = RELATION_DEFAULT.company,
  order = RELATION_DEFAULT.order,
  service = RELATION_DEFAULT.service,
  files = RELATION_DEFAULT.files,
}

const tableName = TABLE_NAME.COMPANY_EVENT;
export enum INDEX_NAME {
  companyEventTypeId = `"${tableName}_${COLUMN.companyEventTypeId}_fkey"`,
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
  orderId = `"${tableName}_${COLUMN.orderId}_fkey"`,
  serviceId = `"${tableName}_${COLUMN.serviceId}_fkey"`,
}

export enum INDEX {
  companyEventTypeId = `@@index([${ATTRIBUTE.companyEventTypeId}], map: ${INDEX_NAME.companyEventTypeId})`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: ${INDEX_NAME.orderId})`,
  serviceId = `@@index([${ATTRIBUTE.serviceId}], map: ${INDEX_NAME.serviceId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
