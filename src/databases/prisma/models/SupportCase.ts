import { createModel } from 'schemix';

import { message, order, supportCasePriority, supportCaseStatus, supportCaseType, user } from '.';
import { createdTime, deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/SupportCase';

export default createModel(MODEL_NAME.SUPPORT_CASE, (SupportCaseModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
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
  const messagesRelation = oneToMany({
    model: message,
    relation: RELATION.messages,
  });
  const supportCasePriorityRelation = oneToOne({
    attribute: ATTRIBUTE.supportCasePriorityId,
    map: INDEX_NAME.supportCasePriorityId,
    model: supportCasePriority,
    relation: RELATION.supportCasePriority,
  });
  const supportCaseStatusRelation = oneToOne({
    attribute: ATTRIBUTE.supportCaseStatusId,
    map: INDEX_NAME.supportCaseStatusId,
    model: supportCaseStatus,
    relation: RELATION.supportCaseStatus,
  });
  const supportCaseTypeRelation = oneToOne({
    attribute: ATTRIBUTE.supportCaseTypeId,
    map: INDEX_NAME.supportCaseTypeId,
    model: supportCaseType,
    relation: RELATION.supportCaseType,
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    map: INDEX_NAME.userId,
    model: user,
    relation: RELATION.user,
  });
  const ordersRelation = oneToMany({
    model: order,
    relation: RELATION.orders,
  });

  // defined Model
  process.nextTick(() => {
    SupportCaseModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.subject, {
        map: COLUMN.subject,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
      })
      .int(ATTRIBUTE.supportCaseTypeId, {
        map: COLUMN.supportCaseTypeId,
      })
      .int(ATTRIBUTE.supportCaseStatusId, {
        map: COLUMN.supportCaseStatusId,
      })
      .int(ATTRIBUTE.supportCasePriorityId, {
        map: COLUMN.supportCasePriorityId,
      })
      .int(ATTRIBUTE.point, {
        map: COLUMN.point,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(messagesRelation)
      .mixin(supportCasePriorityRelation)
      .mixin(supportCaseStatusRelation)
      .mixin(supportCaseTypeRelation)
      .mixin(userRelation)
      .mixin(ordersRelation)

      // indexes
      .raw(INDEX.supportCasePriorityId)
      .raw(INDEX.supportCaseStatusId)
      .raw(INDEX.supportCaseTypeId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.SUPPORT_CASE);
  });
});
