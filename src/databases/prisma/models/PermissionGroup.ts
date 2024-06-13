import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/PermissionGroup';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.PERMISSION_GROUP,
  (PermissionGroupModel) => {
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

        // table name
        .map(TABLE_NAME.PERMISSION_GROUP);
    });
  },
);
