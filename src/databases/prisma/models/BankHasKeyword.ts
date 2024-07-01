import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/bankHasKeyword';
import { oneToOne } from '../mixins';
import Bank from './Bank';

export default createModel(
  MODEL_NAME.BANK_HAS_KEYWORD,
  (bankHasKeywordModel) => {
    // defined Relation
    const bankRelation = oneToOne({
      attribute: ATTRIBUTE.bankId,
      model: Bank,
      relation: RELATION.bank,
      option: { optional: true },
    });

    // defined Model
    process.nextTick(() => {
      bankHasKeywordModel
        .int(ATTRIBUTE.id, {
          id: true,
          default: {
            autoincrement: true,
          },
          map: COLUMN.id,
        })
        .int(ATTRIBUTE.bankId, {
          map: COLUMN.bankId,
        })
        .string(ATTRIBUTE.keyword, {
          map: COLUMN.keyword,
          raw: RAW_STRING.TEXT,
          optional: true,
        })

        // relations
        .mixin(bankRelation)

        // table name
        .map(TABLE_NAME.BANK_HAS_KEYWORD);
    });
  },
);
