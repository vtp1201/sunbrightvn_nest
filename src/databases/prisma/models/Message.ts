import { createModel } from 'schemix';

import { file, supportCase, user } from '.';
import { createdTime, deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Message';

export default createModel(MODEL_NAME.MESSAGE, (MessageModel) => {
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
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const supportCaseRelation = oneToOne({
    attribute: ATTRIBUTE.supportCaseId,
    map: INDEX_NAME.supportCaseId,
    model: supportCase,
    relation: RELATION.supportCase,
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    map: INDEX_NAME.userId,
    model: user,
    relation: RELATION.user,
  });

  // defined Model
  process.nextTick(() => {
    MessageModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
      })
      .int(ATTRIBUTE.supportCaseId, {
        map: COLUMN.supportCaseId,
      })
      .string(ATTRIBUTE.content, {
        map: COLUMN.content,
        raw: RAW_STRING.TEXT,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(filesRelation)
      .mixin(supportCaseRelation)
      .mixin(userRelation)

      // indexes
      .raw(INDEX.supportCaseId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.MESSAGE);
  });
});
