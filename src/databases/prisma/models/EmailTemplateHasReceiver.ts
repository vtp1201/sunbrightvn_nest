import { createModel } from 'schemix';

import { emailTemplate, role, teamGroup, user } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/EmailTemplateHasReceiver';

export default createModel(
  MODEL_NAME.EMAIL_TEMPLATE_HAS_RECEIVER,
  (EmailTemplateHasReceiverModel) => {
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
    const emailTemplateRelation = oneToOne({
      attribute: ATTRIBUTE.emailTemplateId,
      model: emailTemplate,
      relation: RELATION.emailTemplate,
    });
    const groupRelation = oneToOne({
      attribute: ATTRIBUTE.groupId,
      model: teamGroup,
      relation: RELATION.group,
      option: { optional: true },
    });
    const roleRelation = oneToOne({
      attribute: ATTRIBUTE.roleId,
      model: role,
      relation: RELATION.role,
      option: { optional: true },
    });
    const userRelation = oneToOne({
      attribute: ATTRIBUTE.userId,
      model: user,
      relation: RELATION.user,
      option: { optional: true },
    });

    // defined Model
    process.nextTick(() => {
      EmailTemplateHasReceiverModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.emailTemplateId, {
          map: COLUMN.emailTemplateId,
        })
        .string(ATTRIBUTE.email, {
          map: COLUMN.email,
          optional: true,
          raw: RAW_STRING.LENGTH_100,
        })
        .int(ATTRIBUTE.userId, {
          map: COLUMN.userId,
          optional: true,
        })
        .int(ATTRIBUTE.roleId, {
          map: COLUMN.roleId,
          optional: true,
        })
        .int(ATTRIBUTE.groupId, {
          map: COLUMN.groupId,
          optional: true,
        })
        .boolean(ATTRIBUTE.isMainReceiver, {
          map: COLUMN.isMainReceiver,
          default: false,
        })
        .boolean(ATTRIBUTE.isCcReceiver, {
          map: COLUMN.isCcReceiver,
          default: false,
        })
        .boolean(ATTRIBUTE.isBccReceiver, {
          map: COLUMN.isBccReceiver,
          default: false,
        })
        .boolean(ATTRIBUTE.isExcluded, {
          map: COLUMN.isExcluded,
          default: false,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(emailTemplateRelation)
        .mixin(groupRelation)
        .mixin(roleRelation)
        .mixin(userRelation)

        // indexes
        // .raw(INDEX.emailTemplateId)
        // .raw(INDEX.groupId)
        // .raw(INDEX.roleId)
        // .raw(INDEX.userId)

        // table name
        .map(TABLE_NAME.EMAIL_TEMPLATE_HAS_RECEIVER);
    });
  },
);
