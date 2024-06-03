import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  countryId = 'countryId',
  companySuffixId = 'companySuffixId',
}

export enum COLUMN {
  countryId = 'country_id',
  companySuffixId = 'company_suffix_id',
}

export enum RELATION {
  companySuffix = RELATION_DEFAULT.companySuffix,
  country = RELATION_DEFAULT.country,
}

export default {
  ATTRIBUTE,
  RELATION,
};
