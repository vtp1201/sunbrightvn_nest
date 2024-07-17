import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  countryId = 'countryId',
  userId = 'userId',
  customerId = 'customerId',
  name = 'name',
  postalCode = 'postalCode',
  phone = 'phone',
  address = 'address',
  address1 = 'address1',
  state = 'state',
  city = 'city',
  firstName = 'firstName',
  lastName = 'lastName',
  phoneNumber = 'phoneNumber',
  phoneCountryId = 'phoneCountryId',
  taxId = 'taxId',
  xeroContactId = 'xeroContactId',
  additionProcessId = 'additionProcessId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  countryId = 'country_id',
  userId = 'user_id',
  customerId = 'customer_id',
  name = 'name',
  postalCode = 'postal_code',
  phone = 'phone',
  address = 'address',
  address1 = 'address_1',
  state = 'state',
  city = 'city',
  firstName = 'first_name',
  lastName = 'last_name',
  phoneNumber = 'phone_number',
  phoneCountryId = 'phone_country_id',
  taxId = 'tax_id',
  xeroContactId = 'xero_contact_id',
  additionProcessId = 'addition_process_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  additionProcess = RELATION_DEFAULT.additionProcess,
  country = RELATION_DEFAULT.country,
  customer = RELATION_DEFAULT.customer,
  phoneCountry = RELATION_DEFAULT.phoneCountry,
  user = RELATION_DEFAULT.user,
  companies = RELATION_DEFAULT.companies,
  historyCompanies = RELATION_DEFAULT.historyCompanies,
  orders = RELATION_DEFAULT.orders,
}

const tableName = TABLE_NAME.BILLING;
export enum INDEX_NAME {
  additionProcessId = `"${tableName}_${COLUMN.additionProcessId}_fkey"`,
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  customerId = `"${tableName}_${COLUMN.customerId}_fkey"`,
  phoneCountryId = `"${tableName}_${COLUMN.phoneCountryId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
}
export enum INDEX {
  additionProcessId = `@@index([${ATTRIBUTE.additionProcessId}], map: ${INDEX_NAME.additionProcessId})`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  customerId = `@@index([${ATTRIBUTE.customerId}], map: ${INDEX_NAME.customerId})`,
  phoneCountryId = `@@index([${ATTRIBUTE.phoneCountryId}], map: ${INDEX_NAME.phoneCountryId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
}
export default {
  ATTRIBUTE,
  RELATION,
};
