import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/GrantTypeAttribute';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.GRANT_TYPE_ATTRIBUTE,
  (GrantTypeAttributeModel) => {
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
      GrantTypeAttributeModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.grantTypeId, {
          map: COLUMN.grantTypeId,
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
        .int(ATTRIBUTE.parentId, {
          map: COLUMN.parentId,
          optional: true,
        })
        .int(ATTRIBUTE.countryId, {
          map: COLUMN.countryId,
          optional: true,
        })
        .string(ATTRIBUTE.grantTypeAttributeCol, {
          map: COLUMN.grantTypeAttributeCol,
          raw: RAW_STRING.LENGTH_45,
          optional: true,
        })
        .boolean(ATTRIBUTE.isDisabled, {
          map: COLUMN.isDisabled,
          optional: true,
          default: false,
        })
        .int(ATTRIBUTE.order, {
          map: COLUMN.order,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // indexes
        .raw(INDEX.countryId)
        .raw(INDEX.grantTypeId)
        .raw(INDEX.parentId)

        // table name
        .map(TABLE_NAME.GRANT_TYPE_ATTRIBUTE);
    });
  },
);
