import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME_N_M } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/bankHasFileTemplate';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.BANK_HAS_FILE_TEMPLATE,
  (bankHasFileTemplateModel) => {
    // relations
    const bankHasFileTemplateRelation = manyToMany();
    process.nextTick(() => {
      bankHasFileTemplateModel
        .int(ATTRIBUTE.bankId, {
          map: COLUMN.bankId,
        })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })
        .mixin(bankHasFileTemplateRelation)
        .map(TABLE_NAME_N_M.BANK_HAS_FILE_TEMPLATE);
    });
  },
);
