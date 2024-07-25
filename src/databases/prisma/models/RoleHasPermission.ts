import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/RoleHasPermission';

export default createModel(MODEL_NAME.ROLE_HAS_PERMISSION, (RoleHasPermissionModel) => {
  // relations
  const roleHasPermission = manyToMany({
    attributeA: ATTRIBUTE.roleId,
    attributeB: ATTRIBUTE.permissionId,
    modelNameA: MODEL_NAME.ROLE,
    modelNameB: MODEL_NAME.PERMISSION,
  });

  // defined Model
  process.nextTick(() => {
    RoleHasPermissionModel.int(ATTRIBUTE.roleId, {
      map: COLUMN.roleId,
    })
      .int(ATTRIBUTE.permissionId, {
        map: COLUMN.permissionId,
      })

      .mixin(roleHasPermission);
  });
});
