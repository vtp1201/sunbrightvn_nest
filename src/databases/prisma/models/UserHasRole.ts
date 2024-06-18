import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/UserHasRole';

export default createModel(MODEL_NAME.USER_HAS_ROLE, (UserHasRoleModel) => {
  // defined Model
  process.nextTick(() => {
    UserHasRoleModel.int(ATTRIBUTE.userId, {
      map: COLUMN.userId,
    })
      .int(ATTRIBUTE.roleId, {
        map: COLUMN.roleId,
      })

      // ids
      .id({
        fields: [ATTRIBUTE.roleId, ATTRIBUTE.userId],
      })

      // table name
      .map(TABLE_NAME.USER_HAS_ROLE);
  });
});
