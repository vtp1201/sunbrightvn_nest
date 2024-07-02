import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/EmailType';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { emailTemplate } from '.';

export default createModel(MODEL_NAME.EMAIL_TYPE, (EmailTypeModel) => {
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
  const emailTemplatesRelation = oneToMany({
    model: emailTemplate,
    relation: RELATION.emailTemplates,
  });

  // defined Model
  process.nextTick(() => {
    EmailTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_45,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(emailTemplatesRelation)

      // table name
      .map(TABLE_NAME.EMAIL_TYPE);
  });
});
