import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceId = 'serviceId',
  companySuffixId = 'companySuffixId',
}

export enum COLUMN {
  serviceId = 'service_id',
  companySuffixId = 'company_suffix_id',
}

export enum RELATION {
  service = RELATION_DEFAULT.service,
  companySuffix = RELATION_DEFAULT.companySuffix,
}

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
