import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
} from '../utils/enums/EntityTypeHasCompanySuffix';

export default createModel(
  MODEL_NAME.ENTITY_TYPE_HAS_COMPANY_SUFFIX,
  (EntityTypeHasCompanySuffixModel) => {
    // defined Model
    process.nextTick(() => {
      EntityTypeHasCompanySuffixModel.int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
      })
        .int(ATTRIBUTE.companySuffixId, {
          map: COLUMN.companySuffixId,
        })

        // ids
        .id({ fields: [ATTRIBUTE.entityTypeId, ATTRIBUTE.companySuffixId] })

        // indexes
        // .raw(INDEX.companySuffixId)
        // .raw(INDEX.entityTypeId)

        // table name
        .map(TABLE_NAME.ENTITY_TYPE_HAS_COMPANY_SUFFIX);
    });
  },
);
