import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  countryId = 'countryId',
  fatcaId = 'fatcaId',
  taxReferenceType = 'taxReferenceType',
  taxReferenceNumber = 'taxReferenceNumber',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  countryId = 'country_id',
  fatcaId = 'fatca_id',
  taxReferenceType = 'tax_reference_type',
  taxReferenceNumber = 'tax_reference_number',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  fatca = RELATION_DEFAULT.fatca,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}])`,
  fatcaId = `@@index([${ATTRIBUTE.fatcaId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
