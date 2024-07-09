import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/EntityTypeHasCompanySuffix';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.ENTITY_TYPE_HAS_COMPANY_SUFFIX,
  (EntityTypeHasCompanySuffixModel) => {
    // relations
    const entityTypeHasCompanySuffix = manyToMany({
      attributeA: ATTRIBUTE.entityTypeId,
      attributeB: ATTRIBUTE.companySuffixId,
      modelNameA: MODEL_NAME.ENTITY_TYPE,
      modelNameB: MODEL_NAME.COMPANY_SUFFIX,
    });

    // defined Model
    process.nextTick(() => {
      EntityTypeHasCompanySuffixModel.int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
      })
        .int(ATTRIBUTE.companySuffixId, {
          map: COLUMN.companySuffixId,
        })
        .mixin(entityTypeHasCompanySuffix);
    });
  },
);
