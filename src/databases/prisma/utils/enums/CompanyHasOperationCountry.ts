import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  companyId = 'companyId',
  countryId = 'countryId',
}

export enum COLUMN {
  companyId = 'company_id',
  countryId = 'country_id',
}

export enum RELATION {
  company = RELATION_DEFAULT.company,
  country = RELATION_DEFAULT.country,
}

export default {
  ATTRIBUTE,
  RELATION,
};
