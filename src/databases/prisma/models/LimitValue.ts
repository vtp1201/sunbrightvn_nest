import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/LimitValue';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { limit } from '.';

export default createModel(MODEL_NAME.LIMIT_VALUE, (LimitValueModel) => {
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
  const limitRelation = oneToOne({
    attribute: ATTRIBUTE.limitId,
    model: limit,
    relation: RELATION.limit,
  });

  // defined Model
  process.nextTick(() => {
    LimitValueModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.limitId, {
        map: COLUMN.limitId,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(limitRelation)

      // indexes
      // .raw(INDEX.limitId)

      // table name
      .map(TABLE_NAME.LIMIT_VALUE);
  });
});
