import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  companyId = 'companyId',
  businessActivityId = 'businessActivityId',
}

export enum COLUMN {
  companyId = 'company_id',
  businessActivityId = 'business_activity_id',
}

export enum RELATION {
  company = RELATION_DEFAULT.company,
  businessActivity = RELATION_DEFAULT.businessActivity,
}

export default {
  ATTRIBUTE,
  RELATION,
};
