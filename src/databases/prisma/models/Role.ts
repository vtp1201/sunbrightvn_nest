import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Role';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  emailTemplateHasReceiver,
  limit,
  notificationTemplate,
  permission,
  processStepHasRole,
  role,
  user,
} from '.';

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

  // defined Relations
  const emailTemplateHasReceiversRelation = oneToMany({
    model: emailTemplateHasReceiver,
    relation: RELATION.emailTemplateHasReceivers,
  });
  const notificationTemplatesRelation = oneToMany({
    model: notificationTemplate,
    relation: RELATION.notificationTemplates,
  });
  const processStepHasRolesRelation = oneToMany({
    model: processStepHasRole,
    relation: RELATION.processStepHasRoles,
  });
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.parentId,
    model: role,
    relation: RELATION.parent,
    isNeedName: true,
    option: { optional: true },
  });
  const childrenRelation = oneToMany({
    model: role,
    relation: RELATION.children,
    fromRelation: RELATION.parent,
  });
  const limitsRelation = oneToMany({
    model: limit,
    relation: RELATION.limits,
  });
  const permissionsRelation = oneToMany({
    model: permission,
    relation: RELATION.permissions,
  });
  const usersRelation = oneToMany({
    model: user,
    relation: RELATION.users,
  });

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

      // relations
      .mixin(emailTemplateHasReceiversRelation)
      .mixin(notificationTemplatesRelation)
      .mixin(processStepHasRolesRelation)
      .mixin(parentRelation)
      .mixin(childrenRelation)
      .mixin(limitsRelation)
      .mixin(permissionsRelation)
      .mixin(usersRelation)

      // indexes
      // .raw(INDEX.parentId)

      // table name
      .map(TABLE_NAME.ROLE);
  });
});
