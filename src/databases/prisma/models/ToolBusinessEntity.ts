import { createModel } from 'schemix';

import { entityType, option } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/ToolBusinessEntity';

export default createModel(MODEL_NAME.TOOL_BUSINESS_ENTITY, (ToolBusinessEntityModel) => {
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
  const optionRelation = oneToOne({
    attribute: ATTRIBUTE.optionId,
    map: INDEX_NAME.optionId,
    model: option,
    relation: RELATION.option,
  });
  const entityTypeRelation = oneToOne({
    attribute: ATTRIBUTE.entityTypeId,
    map: INDEX_NAME.entityTypeId,
    model: entityType,
    relation: RELATION.entityType,
  });

  // defined Model
  process.nextTick(() => {
    ToolBusinessEntityModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.optionId, {
        map: COLUMN.optionId,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
      })
      .int(ATTRIBUTE.score, {
        map: COLUMN.score,
        optional: true,
      })
      .boolean(ATTRIBUTE.isReject, {
        map: COLUMN.isReject,
        default: false,
      })
      .boolean(ATTRIBUTE.isReset, {
        map: COLUMN.isReset,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(optionRelation)
      .mixin(entityTypeRelation)

      // indexes
      .raw(INDEX.entityTypeId)
      .raw(INDEX.optionId)

      // table name
      .map(TABLE_NAME.TOOL_BUSINESS_ENTITY);
  });
});
