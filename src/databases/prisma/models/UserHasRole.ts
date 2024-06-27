import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/UserHasRole';
import { oneToOne } from '../mixins';
import Role from './Role';
import User from './User';

export default createModel(MODEL_NAME.USER_HAS_ROLE, (UserHasRoleModel) => {
  // relations defined
  const roleRelation = oneToOne({
    attribute: ATTRIBUTE.roleId,
    model: Role,
    relation: RELATION.role,
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    model: User,
    relation: RELATION.user,
  });

  // defined Model
  process.nextTick(() => {
    UserHasRoleModel.int(ATTRIBUTE.userId, {
      map: COLUMN.userId,
    })
      .int(ATTRIBUTE.roleId, {
        map: COLUMN.roleId,
      })

      // relations
      .mixin(roleRelation)
      .mixin(userRelation)

      // ids
      .id({
        fields: [ATTRIBUTE.roleId, ATTRIBUTE.userId],
      })

      // table name
      .map(TABLE_NAME.USER_HAS_ROLE);
  });
});
