import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  companyMemberId = 'companyMemberId',
  businessActivityId = 'businessActivityId',
}

export enum COLUMN {
  companyMemberId = 'company_member_id',
  businessActivityId = 'business_activity_id',
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  businessActivity = RELATION_DEFAULT.businessActivity,
}

export default {
  RELATION,
  ATTRIBUTE,
};
