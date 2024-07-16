import { createModel } from 'schemix';

import { limit, permission } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/PermissionGroup';

export default createModel(MODEL_NAME.PERMISSION_GROUP, (PermissionGroupModel) => {
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Relations
  const limitsRelation = oneToMany({
    model: limit,
    relation: RELATION.limits,
  });
  const permissionsRelation = oneToMany({
    model: permission,
    relation: RELATION.permissions,
  });

  // defined Model
  process.nextTick(() => {
    PermissionGroupModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        unique: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(limitsRelation)
      .mixin(permissionsRelation)

      // table name
      .map(TABLE_NAME.PERMISSION_GROUP);
  });
});
