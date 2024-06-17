import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/RoleHasLimit';

export default createModel(MODEL_NAME.ROLE_HAS_LIMIT, (RoleHasLimitModel) => {
  // defined Model
  process.nextTick(() => {
    RoleHasLimitModel.int(ATTRIBUTE.roleId, {
      map: COLUMN.roleId,
    })
      .int(ATTRIBUTE.limitId, {
        map: COLUMN.limitId,
      })

      // ids
      .id({
        fields: [ATTRIBUTE.limitId, ATTRIBUTE.roleId],
      })

      // table name
      .map(TABLE_NAME.ROLE_HAS_LIMIT);
  });
});
