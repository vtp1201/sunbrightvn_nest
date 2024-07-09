import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceId = 'serviceId',
  companyMemberTypeId = 'companyMemberTypeId',
}

export enum COLUMN {
  serviceId = 'service_id',
  companyMemberTypeId = 'company_member_type_id',
}

export enum RELATION {}
// service = RELATION_DEFAULT.service,
// companyMemberType = RELATION_DEFAULT.companyMemberType,

export default {
  ATTRIBUTE,
  RELATION,
};
