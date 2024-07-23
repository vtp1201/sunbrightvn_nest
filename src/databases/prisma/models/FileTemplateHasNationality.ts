import { createModel } from 'schemix';

import { country, fileTemplate } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  INDEX_NAME,
  RELATION,
} from '../utils/enums/FileTemplateHasNationality';

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

    // defined Relations
    const countryRelation = oneToOne({
      attribute: ATTRIBUTE.countryId,
      relation: RELATION.country,
      model: country,
      map: INDEX_NAME.countryId,
    });
    const fileTemplateRelation = oneToOne({
      attribute: ATTRIBUTE.fileTemplateId,
      relation: RELATION.fileTemplate,
      model: fileTemplate,
      map: INDEX_NAME.fileTemplateId,
    });

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

        // relations
        .mixin(countryRelation)
        .mixin(fileTemplateRelation)

        // indexes
        .raw(INDEX.countryId)
        .raw(INDEX.fileTemplateId)

        // ids
        .id({
          fields: [ATTRIBUTE.countryId, ATTRIBUTE.fileTemplateId],
        })

        // table name
        .map(TABLE_NAME.FILE_TEMPLATE_HAS_NATIONALITY);
    });
  },
);
