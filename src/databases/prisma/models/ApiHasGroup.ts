import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ApiHasGroup';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.API_HAS_GROUP, (ApiHasGroupModel) => {
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

  // defined Model
  process.nextTick(() => {
    ApiHasGroupModel.int(ATTRIBUTE.apiId, {
      map: COLUMN.apiId,
    })
      .int(ATTRIBUTE.apiGroupId, {
        map: COLUMN.apiGroupId,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })

      .id({
        fields: [ATTRIBUTE.apiGroupId, ATTRIBUTE.apiId],
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.API_HAS_GROUP);
  });
});
