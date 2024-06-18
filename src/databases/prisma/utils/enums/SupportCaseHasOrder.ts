import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  supportCaseId = 'supportCaseId',
  orderId = 'orderId',
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
}

export enum COLUMN {
  supportCaseId = 'support_case_id',
  orderId = 'order_id',
  updatedTime = COLUMN_DEFAULT.updatedTime,
}

export enum RELATION {
  order = RELATION_DEFAULT.order,
  supportCase = RELATION_DEFAULT.supportCase,
}

export default {
  ATTRIBUTE,
  RELATION,
};
