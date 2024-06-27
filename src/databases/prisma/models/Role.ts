import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Role';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.ROLE, (RoleModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
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
    RoleModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.value, {
        map: COLUMN.value,
        raw: RAW_STRING.LENGTH_100,
        default: '',
      })
      .int(ATTRIBUTE.left, {
        map: COLUMN.left,
        optional: true,
      })
      .int(ATTRIBUTE.right, {
        map: COLUMN.right,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        default: 1,
      })
      .json(ATTRIBUTE.colorCode, {
        map: COLUMN.colorCode,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.parentId)

      // table name
      .map(TABLE_NAME.ROLE);
  });
});
