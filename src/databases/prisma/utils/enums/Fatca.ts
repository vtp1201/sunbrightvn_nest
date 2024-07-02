import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyMemberId = 'companyMemberId',
  customerId = 'customerId',
  taskId = 'taskId',
  holderName = 'holderName',
  holderBirthday = 'holderBirthday',
  holderCountryId = 'holderCountryId',
  residentAddress = 'residentAddress',
  residentCountryId = 'residentCountryId',
  residentCity = 'residentCity',
  residentState = 'residentState',
  residentPostalCode = 'residentPostalCode',
  mailingAddress = 'mailingAddress',
  mailingCountryId = 'mailingCountryId',
  mailingCity = 'mailingCity',
  mailingState = 'mailingState',
  mailingPostalCode = 'mailingPostalCode',
  optionDeclarationUSPerson = 'optionDeclarationUSPerson',
  taxpayerIdNumber = 'taxpayerIdNumber',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  companyMemberId = 'company_member_id',
  customerId = 'customer_id',
  taskId = 'task_id',
  holderName = 'holder_name',
  holderBirthday = 'holder_birthday',
  holderCountryId = 'holder_country_id',
  residentAddress = 'resident_address',
  residentCountryId = 'resident_country_id',
  residentCity = 'resident_city',
  residentState = 'resident_state',
  residentPostalCode = 'resident_postal_code',
  mailingAddress = 'mailing_address',
  mailingCountryId = 'mailing_country_id',
  mailingCity = 'mailing_city',
  mailingState = 'mailing_state',
  mailingPostalCode = 'mailing_postal_code',
  optionDeclarationUSPerson = 'option_declaration_US_person',
  taxpayerIdNumber = 'taxpayer_id_number',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  declarationTaxes = RELATION_DEFAULT.declarationTaxes,
  companyMember = RELATION_DEFAULT.companyMember,
  customer = RELATION_DEFAULT.customer,
  holderCountry = RELATION_DEFAULT.holderCountry,
  mailingCountry = RELATION_DEFAULT.mailingCountry,
  residentCountry = RELATION_DEFAULT.residentCountry,
  task = RELATION_DEFAULT.task,
}

export enum INDEX {
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}])`,
  customerId = `@@index([${ATTRIBUTE.customerId}])`,
  holderCountryId = `@@index([${ATTRIBUTE.holderCountryId}])`,
  mailingCountryId = `@@index([${ATTRIBUTE.mailingCountryId}])`,
  residentCountryId = `@@index([${ATTRIBUTE.residentCountryId}])`,
  taskId = `@@index([${ATTRIBUTE.taskId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
