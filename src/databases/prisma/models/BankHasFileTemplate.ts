import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/bankHasFileTemplate';

export default createModel(
  MODEL_NAME.BANK_HAS_FILE_TEMPLATE,
  (bankHasFileTemplateModel) => {
    bankHasFileTemplateModel
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
      })
      .int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
      })
      .id({
        fields: [ATTRIBUTE.bankId, ATTRIBUTE.fileTemplateId],
      })

      // table name
      .map(TABLE_NAME.BANK_HAS_FILE_TEMPLATE);
  },
);
