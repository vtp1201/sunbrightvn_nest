import { createModel } from 'schemix';

import { country } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Target';

export default createModel(MODEL_NAME.TARGET, (TargetModel) => {
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
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    map: INDEX_NAME.countryId,
    model: country,
    relation: RELATION.country,
  });

  // defined Model
  process.nextTick(() => {
    TargetModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .int(ATTRIBUTE.value, {
        map: COLUMN.value,
        optional: true,
      })
      .int(ATTRIBUTE.targetTypeId, {
        map: COLUMN.targetTypeId,
      })
      .dateTime(ATTRIBUTE.dateOfTarget, {
        map: COLUMN.dateOfTarget,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(countryRelation)

      // indexes
      .raw(INDEX.countryId)

      // table name
      .map(TABLE_NAME.TARGET);
  });
});
