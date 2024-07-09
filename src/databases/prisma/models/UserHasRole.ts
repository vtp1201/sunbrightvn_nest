import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/UserHasRole';
import { manyToMany } from '../mixins';

export default createModel(MODEL_NAME.USER_HAS_ROLE, (UserHasRoleModel) => {
  // relations
  const userHasRole = manyToMany({
    attributeA: ATTRIBUTE.userId,
    attributeB: ATTRIBUTE.roleId,
    modelNameA: MODEL_NAME.USER,
    modelNameB: MODEL_NAME.ROLE,
  });

  // defined Model
  process.nextTick(() => {
    UserHasRoleModel.int(ATTRIBUTE.userId, {
      map: COLUMN.userId,
    })
      .int(ATTRIBUTE.roleId, {
        map: COLUMN.roleId,
      })

      .mixin(userHasRole);
  });
});
