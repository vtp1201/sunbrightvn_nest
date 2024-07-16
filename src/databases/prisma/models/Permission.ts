import { createModel } from 'schemix';

import { limit, permissionGroup, role } from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Permission';

export default createModel(MODEL_NAME.PERMISSION, (PermissionModel) => {
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
  const permissionGroupRelation = oneToOne({
    attribute: ATTRIBUTE.permissionGroupId,
    model: permissionGroup,
    relation: RELATION.permissionGroup,
  });
  const rolesRelation = oneToMany({
    model: role,
    relation: RELATION.roles,
  });

  // defined Model
  process.nextTick(() => {
    PermissionModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.permissionGroupId, {
        map: COLUMN.permissionGroupId,
      })
      .string(ATTRIBUTE.value, {
        map: COLUMN.value,
        raw: RAW_STRING.LENGTH_45,
        unique: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(limitsRelation)
      .mixin(permissionGroupRelation)
      .mixin(rolesRelation)

      // indexes
      // .raw(INDEX.permissionGroupId)

      // table name
      .map(TABLE_NAME.PERMISSION);
  });
});
