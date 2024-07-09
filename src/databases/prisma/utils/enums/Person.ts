import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  countryId = 'countryId',
  firstName = 'firstName',
  lastName = 'lastName',
  genderId = 'genderId',
  phone = 'phone',
  phoneNumber = 'phoneNumber',
  phoneCountryId = 'phoneCountryId',
  email = 'email',
  birthday = 'birthday',
  address = 'address',
  ssn = 'ssn',
  image = 'image',
  status = 'status',
  titleNameId = 'titleNameId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  countryId = 'country_id',
  firstName = 'first_name',
  lastName = 'last_name',
  genderId = 'gender_id',
  phone = 'phone',
  phoneNumber = 'phone_number',
  phoneCountryId = 'phone_country_id',
  email = 'email',
  birthday = 'birthday',
  address = 'address',
  ssn = 'ssn',
  image = 'image',
  status = 'status',
  titleNameId = 'title_name_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  customers = RELATION_DEFAULT.customers,
  country = RELATION_DEFAULT.country,
  gender = RELATION_DEFAULT.gender,
  phoneCountry = RELATION_DEFAULT.phoneCountry,
  titleName = RELATION_DEFAULT.titleName,
  processes = RELATION_DEFAULT.processes,
  users = RELATION_DEFAULT.users,
}

export enum INDEX {
  genderId = `@@index([${ATTRIBUTE.genderId}])`,
  phoneCountryId = `@@index([${ATTRIBUTE.phoneCountryId}])`,
  titleNameId = `@@index([${ATTRIBUTE.titleNameId}])`,
  countryId = `@@index([${ATTRIBUTE.countryId}])`,
}

export default {
  ATTRIBUTE,
  COLUMN,
  RELATION,
};
