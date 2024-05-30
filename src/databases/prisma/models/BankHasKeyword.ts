import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/bankHasKeyword';

export default createModel(
  MODEL_NAME.BANK_HAS_KEYWORD,
  (bankHasKeywordModel) => {
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

      // table name
      .map(TABLE_NAME.BANK_HAS_KEYWORD);
  },
);
