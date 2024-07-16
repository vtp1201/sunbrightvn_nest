import { createModel } from 'schemix';

import { createdTime, deleted, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ActionLog';
import { user } from './';

export default createModel(MODEL_NAME.ACTION_LOG, (ActionLogModel) => {
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

  // init relations
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    model: user,
    relation: RELATION.user,
    option: {
      optional: true,
    },
  });

  // defined Model
  process.nextTick(() => {
    ActionLogModel.int(ATTRIBUTE.id, {
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.type, {
        map: COLUMN.type,
      })
      .id({
        fields: [ATTRIBUTE.id, ATTRIBUTE.type],
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(userRelation)

      // table name
      .map(TABLE_NAME.ACTION_LOG);
  });
});
