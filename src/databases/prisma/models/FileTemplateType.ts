import { createModel } from 'schemix';

import { fileTemplate } from '.';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/FileTemplateType';

export default createModel(MODEL_NAME.FILE_TEMPLATE_TYPE, (FileTemplateTypeModel) => {
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
  const fileTemplatesRelation = oneToMany({
    model: fileTemplate,
    relation: RELATION.fileTemplates,
  });

  // defined Model
  process.nextTick(() => {
    FileTemplateTypeModel.int(ATTRIBUTE.id, {
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

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(fileTemplatesRelation)

      // table name
      .map(TABLE_NAME.FILE_TEMPLATE_TYPE);
  });
});
