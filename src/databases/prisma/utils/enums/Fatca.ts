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
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
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
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  declarationTaxes = RELATION_DEFAULT.declarationTaxes,
  companyMember = RELATION_DEFAULT.companyMember,
  customer = RELATION_DEFAULT.customer,
  countryHolderCountry = RELATION_DEFAULT.countryHolderCountry,
  countryMailingCountry = RELATION_DEFAULT.countryMailingCountry,
  countryResidentCountry = RELATION_DEFAULT.countryResidentCountry,
  task = RELATION_DEFAULT.task,
}

export enum INDEX {
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_fat_company_member_id_com_id_dfbt")`,
  customerId = `@@index([${ATTRIBUTE.customerId}], map: "fk_fat_customer_id_cus_id_1x24")`,
  holderCountryId = `@@index([${ATTRIBUTE.holderCountryId}], map: "fk_fat_holder_country_id_cou_id_350l")`,
  mailingCountryId = `@@index([${ATTRIBUTE.mailingCountryId}], map: "fk_fat_mailing_country_id_cou_id_bmuc")`,
  residentCountryId = `@@index([${ATTRIBUTE.residentCountryId}], map: "fk_fat_resident_country_id_cou_id_l92h")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_fat_task_id_tas_id_7a31")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
