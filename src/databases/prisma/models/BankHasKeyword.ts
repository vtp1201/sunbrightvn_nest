import { createModel } from 'schemix';

import { oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/bankHasKeyword';
import { bank } from './';

export default createModel(MODEL_NAME.BANK_HAS_KEYWORD, (bankHasKeywordModel) => {
  // defined Relation
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: bank,
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
});
