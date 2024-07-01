import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/BankHasCountry';
import { oneToOne } from '../mixins';
import Bank from './Bank';
import Country from './Country';

export default createModel(
  MODEL_NAME.BANK_HAS_COUNTRY,
  (BankHasCountryModel) => {
    // defined Relation
    const bankRelation = oneToOne({
      attribute: ATTRIBUTE.bankId,
      model: Bank,
      relation: RELATION.bank,
    });
    // defined Relation
    const countryRelation = oneToOne({
      attribute: ATTRIBUTE.countryId,
      model: Country,
      relation: RELATION.country,
    });

    // defined Model
    process.nextTick(() => {
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
        .id({
          fields: [ATTRIBUTE.bankId, ATTRIBUTE.countryId],
        })

        // relations
        .mixin(bankRelation)
        .mixin(countryRelation)

        // table name
        .map(TABLE_NAME.BANK_HAS_COUNTRY);
    });
  },
);
