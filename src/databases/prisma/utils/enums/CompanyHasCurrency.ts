import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  companyId = 'companyId',
  currencyId = 'currencyId',
}

export enum COLUMN {
  companyId = 'company_id',
  currencyId = 'currency_id',
}

export enum RELATION {
  company = RELATION_DEFAULT.company,
  currency = RELATION_DEFAULT.currency,
}

export default {
  ATTRIBUTE,
  RELATION,
};
