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
  gender = RELATION_DEFAULT.gender,
  titleName = RELATION_DEFAULT.titleName,
  customer = RELATION_DEFAULT.customer,
  user = RELATION_DEFAULT.user,
}

export enum INDEX {
  genderId = `@@index([${ATTRIBUTE.genderId}], map: "fk_person_gender1_idx")`,
  phoneCountryId = `@@index([${ATTRIBUTE.phoneCountryId}], map: "fk_person_has_phone_country_idx")`,
  titleNameId = `@@index([${ATTRIBUTE.titleNameId}], map: "fk_person_title_name1_idx")`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: "fk_profile_country1_idx")`,
}

export default {
  ATTRIBUTE,
  COLUMN,
  RELATION,
};
