import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ContactFrom';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { contactFromHistory, customer, mailchimpTag } from '.';

export default createModel(MODEL_NAME.CONTACT_FROM, (ContactFromModel) => {
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

  // defined relations
  const contactFromHistoriesRelation = oneToMany({
    model: contactFromHistory,
    relation: RELATION.contactFromHistories,
  });
  const mailchimpTagsRelation = oneToMany({
    model: mailchimpTag,
    relation: RELATION.mailchimpTags,
  });
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });

  // defined Model
  process.nextTick(() => {
    ContactFromModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_50,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.type, {
        map: COLUMN.type,
        default: 2,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(contactFromHistoriesRelation)
      .mixin(customersRelation)
      .mixin(mailchimpTagsRelation)

      // table name
      .map(TABLE_NAME.CONTACT_FROM);
  });
});
