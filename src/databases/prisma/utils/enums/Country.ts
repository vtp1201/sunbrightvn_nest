import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  guid = 'guid',
  countryCode = 'countryCode',
  phoneCode = 'phoneCode',
  isRestricted = 'isRestricted',
  subName = 'subName',
  isCountry = 'isCountry',
  left = 'left',
  right = 'right',
  continentId = 'continentId',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  guid = 'guid',
  countryCode = 'country_code',
  phoneCode = 'phone_code',
  isRestricted = 'is_restricted',
  subName = 'sub_name',
  isCountry = 'is_country',
  left = 'left',
  right = 'right',
  continentId = 'continent_id',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  actionProcessSteps = RELATION_DEFAULT.actionProcessSteps,
  agents = RELATION_DEFAULT.agents,
  answers = RELATION_DEFAULT.answers,
  banks = RELATION_DEFAULT.banks,
  bankHasCountries = RELATION_DEFAULT.bankHasCountries,
  bankingProcesses = RELATION_DEFAULT.bankingProcesses,
  billings = RELATION_DEFAULT.billings,
  phoneBillings = RELATION_DEFAULT.phoneBillings,
  businessActivities = RELATION_DEFAULT.businessActivities,
}

export default {
  ATTRIBUTE,
  RELATION,
};
