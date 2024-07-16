import { createModel } from 'schemix';

import { contactFrom, customer } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ContactFromHistory';

export default createModel(MODEL_NAME.CONTACT_FROM_HISTORY, (ContactFromHistoryModel) => {
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
  const contactFromRelation = oneToOne({
    attribute: ATTRIBUTE.contactFromId,
    model: contactFrom,
    relation: RELATION.contactFrom,
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
  });

  // defined Model
  process.nextTick(() => {
    ContactFromHistoryModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
      })
      .int(ATTRIBUTE.contactFromId, {
        map: COLUMN.contactFromId,
      })
      .string(ATTRIBUTE.tagName, {
        map: COLUMN.tagName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(contactFromRelation)
      .mixin(customerRelation)

      // table name
      .map(TABLE_NAME.CONTACT_FROM_HISTORY);
  });
});
