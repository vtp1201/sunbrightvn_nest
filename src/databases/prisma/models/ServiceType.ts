import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ServiceType';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.SERVICE_TYPE, (ServiceTypeModel) => {
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
    ServiceTypeModel.int(ATTRIBUTE.id, {
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
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
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
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isActive, {
        map: COLUMN.isActive,
        default: true,
      })
      .boolean(ATTRIBUTE.isRequired, {
        map: COLUMN.isRequired,
        default: false,
      })
      .boolean(ATTRIBUTE.isOnly, {
        map: COLUMN.isOnly,
        default: false,
      })
      .json(ATTRIBUTE.processStepTypes, {
        map: COLUMN.processStepTypes,
        optional: true,
      })
      .int(ATTRIBUTE.order, {
        map: COLUMN.order,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.parentId)
      // .raw(INDEX.websiteId)

      // table name
      .map(TABLE_NAME.SERVICE_TYPE);
  });
});
