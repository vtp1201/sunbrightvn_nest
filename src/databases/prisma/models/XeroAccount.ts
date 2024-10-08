import { createModel } from 'schemix';

import { service } from '.';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/XeroAccount';

export default createModel(MODEL_NAME.XERO_ACCOUNT, (XeroAccountModel) => {
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

  // relations defined
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });

  // defined Model
  process.nextTick(() => {
    XeroAccountModel.int(ATTRIBUTE.id, {
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
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.type, {
        map: COLUMN.type,
        raw: RAW_STRING.LENGTH_50,
        default: 'SALE',
      })
      .string(ATTRIBUTE.code, {
        map: COLUMN.code,
        raw: RAW_STRING.LENGTH_50,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(servicesRelation)

      // table name
      .map(TABLE_NAME.XERO_ACCOUNT);
  });
});
