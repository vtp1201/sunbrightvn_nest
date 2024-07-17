import { createModel } from 'schemix';

import { oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/BankHasCountry';
import { bank, country } from './';

export default createModel(MODEL_NAME.BANK_HAS_COUNTRY, (BankHasCountryModel) => {
  // defined Relation
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: bank,
    relation: RELATION.bank,
    option: {
      map: INDEX_NAME.bankId,
    },
  });
  // defined Relation
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: {
      map: INDEX_NAME.countryId,
    },
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

      // indexes
      .raw(INDEX.bankId)
      .raw(INDEX.countryId)

      // table name
      .map(TABLE_NAME.BANK_HAS_COUNTRY);
  });
});
