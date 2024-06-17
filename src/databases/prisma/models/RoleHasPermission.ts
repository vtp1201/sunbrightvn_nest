import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/RoleHasPermission';

export default createModel(
  MODEL_NAME.ROLE_HAS_PERMISSION,
  (RoleHasPermissionModel) => {
    // defined Model
    process.nextTick(() => {
      RoleHasPermissionModel.int(ATTRIBUTE.roleId, {
        map: COLUMN.roleId,
      })
        .int(ATTRIBUTE.permissionId, {
          map: COLUMN.permissionId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.roleId, ATTRIBUTE.permissionId],
        })

        // table name
        .map(TABLE_NAME.ROLE_HAS_PERMISSION);
    });
  },
);
