import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ProcessStep';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.PROCESS_STEP, (ProcessStepModel) => {
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
    ProcessStepModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.processStepTypeId, {
        map: COLUMN.processStepTypeId,
      })
      .int(ATTRIBUTE.value, {
        map: COLUMN.value,
        unique: true,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
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
      .string(ATTRIBUTE.descriptionDisplay, {
        map: COLUMN.descriptionDisplay,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .boolean(ATTRIBUTE.isGeneratedFile, {
        map: COLUMN.isGeneratedFile,
        default: false,
      })
      .boolean(ATTRIBUTE.isSendLinkSigned, {
        map: COLUMN.isSendLinkSigned,
        default: false,
      })
      .int(ATTRIBUTE.order, {
        map: COLUMN.order,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.parentId)
      // .raw(INDEX.processStepTypeId)

      // table name
      .map(TABLE_NAME.PROCESS_STEP);
  });
});
