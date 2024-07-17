import { TABLE_NAME } from '../constants';
import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  bankId = 'bankId',
  countryId = 'countryId',
  isMemberCountry = 'isMemberCountry',
  isPartnerCountry = 'isPartnerCountry',
  isOwnerCountry = 'isOwnerCountry',
  isIncorporationCountry = 'isIncorporationCountry',
  isRemoteOpening = 'isRemoteOpening',
  score = 'score',
}

export enum COLUMN {
  bankId = 'bank_id',
  countryId = 'country_id',
  isMemberCountry = 'is_member_country',
  isPartnerCountry = 'is_partner_country',
  isOwnerCountry = 'is_owner_country',
  isIncorporationCountry = 'is_incorporation_country',
  isRemoteOpening = 'is_remote_opening',
  score = 'score',
}

export enum RELATION {
  bank = RELATION_DEFAULT.bank,
  country = RELATION_DEFAULT.country,
}

const tableName = TABLE_NAME.BANK_HAS_COUNTRY;
export enum INDEX_NAME {
  bankId = `"${tableName}_${COLUMN.bankId}_fkey"`,
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
}
export enum INDEX {
  bankId = `@@index([${ATTRIBUTE.bankId}], map: ${INDEX_NAME.bankId})`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
