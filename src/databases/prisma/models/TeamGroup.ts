import { createModel } from 'schemix';

import { emailTemplateHasReceiver, user } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/TeamGroup';

export default createModel(MODEL_NAME.TEAM_GROUP, (TeamGroupModel) => {
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
  const usersRelation = oneToMany({
    model: user,
    relation: RELATION.users,
  });
  const leaderUserRelation = oneToOne({
    attribute: ATTRIBUTE.leaderUserId,
    map: INDEX_NAME.leaderUserId,
    model: user,
    relation: RELATION.leaderUser,
    isNeedName: true,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    TeamGroupModel.int(ATTRIBUTE.id, {
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
      .int(ATTRIBUTE.leaderUserId, {
        map: COLUMN.leaderUserId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(emailTemplateHasReceiversRelation)
      .mixin(leaderUserRelation)
      .mixin(usersRelation)

      // indexes
      .raw(INDEX.leaderUserId)

      // table name
      .map(TABLE_NAME.TEAM_GROUP);
  });
});
