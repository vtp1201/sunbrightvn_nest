import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/FileTemplateHasNationality';
import { createdTime, deleted, updatedTime } from '../mixins';

// TODO: xem sét xóa
export default createModel(
  MODEL_NAME.FILE_TEMPLATE_HAS_NATIONALITY,
  (FileTemplateHasNationalityModel) => {
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
      FileTemplateHasNationalityModel.int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
      })
        .int(ATTRIBUTE.countryId, {
          map: COLUMN.countryId,
        })
        .boolean(ATTRIBUTE.isFillMoreInformation, {
          map: COLUMN.isFillMoreInformation,
          default: false,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // ids
        .id({
          fields: [ATTRIBUTE.countryId, ATTRIBUTE.fileTemplateId],
        })

        // table name
        .map(TABLE_NAME.FILE_TEMPLATE_HAS_NATIONALITY);
    });
  },
);
