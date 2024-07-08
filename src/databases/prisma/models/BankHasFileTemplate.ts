import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/bankHasFileTemplate';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.BANK_HAS_FILE_TEMPLATE,
  (bankHasFileTemplateModel) => {
    // relations
    const bankHasFileTemplateRelation = manyToMany({
      attributeA: ATTRIBUTE.bankId,
      attributeB: ATTRIBUTE.fileTemplateId,
      modelNameA: MODEL_NAME.BANK,
      modelNameB: MODEL_NAME.FILE_TEMPLATE,
    });
    process.nextTick(() => {
      bankHasFileTemplateModel
        .int(ATTRIBUTE.bankId, {
          map: COLUMN.bankId,
        })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })
        .mixin(bankHasFileTemplateRelation);
    });
  },
);
