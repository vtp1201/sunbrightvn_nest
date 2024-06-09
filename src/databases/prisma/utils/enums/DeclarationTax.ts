import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  countryId = 'countryId',
  fatcaId = 'fatcaId',
  taxReferenceType = 'taxReferenceType',
  taxReferenceNumber = 'taxReferenceNumber',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
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
  countryId = '@@index([country_id], map: "fk_dec_country_id_cou_id_37d2")',
  fatcaId = '@@index([fatca_id], map: "fk_dec_fatca_id_fat_id_c5mf")',
}

export default {
  ATTRIBUTE,
  RELATION,
};
