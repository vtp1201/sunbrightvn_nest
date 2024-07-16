import { createModel } from 'schemix';

import { contactFrom } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/MailchimpTag';

export default createModel(MODEL_NAME.MAILCHIMP_TAG, (MailchimpTagModel) => {
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
  const contactFromRelation = oneToOne({
    attribute: ATTRIBUTE.contactFromId,
    model: contactFrom,
    relation: RELATION.contactFrom,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    MailchimpTagModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_200,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.contactFromId, {
        map: COLUMN.contactFromId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(contactFromRelation)

      // indexes
      // .raw(INDEX.contactFromId)

      // table name
      .map(TABLE_NAME.MAILCHIMP_TAG);
  });
});
