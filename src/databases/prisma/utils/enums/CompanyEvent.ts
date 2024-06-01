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

export default {
  ATTRIBUTE,
  RELATION,
};
