import { createModel } from 'schemix';

import { limitType, limitValue, permission, permissionGroup, role } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Limit';

export default createModel(MODEL_NAME.LIMIT, (LimitModel) => {
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

  // defined Relations
  const limitTypeRelation = oneToOne({
    attribute: ATTRIBUTE.limitTypeId,
    model: limitType,
    relation: RELATION.limitType,
  });
  const permissionGroupRelation = oneToOne({
    attribute: ATTRIBUTE.permissionGroupId,
    model: permissionGroup,
    relation: RELATION.permissionGroup,
    option: { optional: true },
  });
  const permissionRelation = oneToOne({
    attribute: ATTRIBUTE.permissionId,
    model: permission,
    relation: RELATION.permission,
    option: { optional: true },
  });
  const limitValuesRelation = oneToMany({
    model: limitValue,
    relation: RELATION.limitValues,
  });
  const rolesRelation = oneToMany({
    model: role,
    relation: RELATION.roles,
  });

  // defined Model
  process.nextTick(() => {
    LimitModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })
      .int(ATTRIBUTE.limitTypeId, {
        map: COLUMN.limitTypeId,
      })
      .int(ATTRIBUTE.permissionGroupId, {
        map: COLUMN.permissionGroupId,
      })
      .int(ATTRIBUTE.permissionId, {
        map: COLUMN.permissionId,
      })
      .string(ATTRIBUTE.model, {
        map: COLUMN.model,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(limitTypeRelation)
      .mixin(permissionGroupRelation)
      .mixin(permissionRelation)
      .mixin(limitValuesRelation)
      .mixin(rolesRelation)

      // indexes
      // .raw(INDEX.limitTypeId)
      // .raw(INDEX.permissionGroupId)
      // .raw(INDEX.permissionId)

      // table name
      .map(TABLE_NAME.LIMIT);
  });
});
