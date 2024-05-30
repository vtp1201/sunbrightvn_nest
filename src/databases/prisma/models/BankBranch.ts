import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/BankBranch';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.BANK_BRANCH, (BankBranchModel) => {
  BankBranchModel.int(ATTRIBUTE.id, {
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.name, {
      map: COLUMN.name,
      optional: true,
      raw: RAW_STRING.LENGTH_200,
    })
    .string(ATTRIBUTE.address, {
      map: COLUMN.address,
      raw: RAW_STRING.LENGTH_200,
      optional: true,
    })
    .int(ATTRIBUTE.bankId, {
      map: COLUMN.bankId,
      optional: true,
    })

    // dateTime marks
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.BANK_BRANCH);
});
