import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/RoleHasLimit';
import { manyToMany } from '../mixins';

export default createModel(MODEL_NAME.ROLE_HAS_LIMIT, (RoleHasLimitModel) => {
  // relations
  const roleHasLimit = manyToMany({
    attributeA: ATTRIBUTE.roleId,
    attributeB: ATTRIBUTE.limitId,
    modelNameA: MODEL_NAME.ROLE,
    modelNameB: MODEL_NAME.LIMIT,
  });

  // defined Model
  process.nextTick(() => {
    RoleHasLimitModel.int(ATTRIBUTE.roleId, {
      map: COLUMN.roleId,
    })
      .int(ATTRIBUTE.limitId, {
        map: COLUMN.limitId,
      })

      .mixin(roleHasLimit);
  });
});
