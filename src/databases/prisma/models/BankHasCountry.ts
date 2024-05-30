import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/BankHasCountry';

export default createModel(
  MODEL_NAME.BANK_HAS_COUNTRY,
  (BankHasCountryModel) => {
    BankHasCountryModel.int(ATTRIBUTE.bankId, {
      map: COLUMN.bankId,
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .boolean(ATTRIBUTE.isMemberCountry, {
        map: COLUMN.isMemberCountry,
        optional: true,
        default: false,
      })
      .boolean(ATTRIBUTE.isPartnerCountry, {
        map: COLUMN.isPartnerCountry,
        optional: true,
        default: false,
      })
      .boolean(ATTRIBUTE.isOwnerCountry, {
        map: COLUMN.isOwnerCountry,
        optional: true,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemoteOpening, {
        map: COLUMN.isRemoteOpening,
        optional: true,
        default: false,
      })
      .int(ATTRIBUTE.score, {
        map: COLUMN.score,
        optional: true,
        default: 0,
      })

      // table name
      .map(TABLE_NAME.BANK_HAS_COUNTRY);
  },
);
