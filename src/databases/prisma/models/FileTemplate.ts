import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/FileTemplate';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.FILE_TEMPLATE, (FileTemplateModel) => {
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
    FileTemplateModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.pathTemplate, {
        map: COLUMN.pathTemplate,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .boolean(ATTRIBUTE.isNotSigned, {
        map: COLUMN.isNotSigned,
        default: false,
      })
      .boolean(ATTRIBUTE.isESign, {
        map: COLUMN.isESign,
        default: false,
      })
      .boolean(ATTRIBUTE.isSignedForFatca, {
        map: COLUMN.isSignedForFatca,
        default: false,
      })
      .boolean(ATTRIBUTE.isApprovedDateAppointment, {
        map: COLUMN.isApprovedDateAppointment,
        default: false,
      })
      .boolean(ATTRIBUTE.isInactive, {
        map: COLUMN.isInactive,
        default: false,
      })
      .int(ATTRIBUTE.collectSameId, {
        map: COLUMN.collectSameId,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTemplateTypeId, {
        map: COLUMN.fileTemplateTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTypeId, {
        map: COLUMN.fileTypeId,
        optional: true,
      })
      .json(ATTRIBUTE.dataConfig, {
        map: COLUMN.dataConfig,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.collectSameId)
      .raw(INDEX.parentId)

      // table name
      .map(TABLE_NAME.FILE_TEMPLATE);
  });
});
