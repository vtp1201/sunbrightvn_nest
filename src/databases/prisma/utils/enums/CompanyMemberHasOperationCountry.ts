import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  companyMemberId = 'companyMemberId',
  countryId = 'countryId',
}

export enum COLUMN {
  companyMemberId = 'company_member_id',
  countryId = 'country_id',
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  country = RELATION_DEFAULT.country,
}

export default {
  ATTRIBUTE,
  RELATION,
};
