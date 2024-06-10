import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/EmailTemplate';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.EMAIL_TEMPLATE, (EmailTemplateModel) => {
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
    EmailTemplateModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.previewText, {
        map: COLUMN.previewText,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.path, {
        map: COLUMN.path,
        optional: true,
        raw: RAW_STRING.LENGTH_200,
      })
      .int(ATTRIBUTE.preTime, {
        map: COLUMN.preTime,
        optional: true,
      })
      .int(ATTRIBUTE.nextEmailTemplateId, {
        map: COLUMN.nextEmailTemplateId,
        optional: true,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
        optional: true,
      })
      .int(ATTRIBUTE.emailTypeId, {
        map: COLUMN.emailTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.maxTimeSend, {
        map: COLUMN.maxTimeSend,
        optional: true,
      })
      .boolean(ATTRIBUTE.isEmailRemind, {
        map: COLUMN.isEmailRemind,
        default: false,
      })
      .json(ATTRIBUTE.dataViewTables, {
        map: COLUMN.dataViewTables,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.emailTypeId)
      .raw(INDEX.nextEmailTemplateId)
      .raw(INDEX.processStepId)

      // table name
      .map(TABLE_NAME.EMAIL_TEMPLATE);
  });
});
