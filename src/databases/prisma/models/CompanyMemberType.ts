import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyMemberType';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_TYPE,
  (CompanyMemberTypeModel) => {
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
      CompanyMemberTypeModel.int(ATTRIBUTE.id, {
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
        .string(ATTRIBUTE.description, {
          map: COLUMN.description,
          raw: RAW_STRING.TEXT,
          optional: true,
        })
        .int(ATTRIBUTE.parentId, {
          map: COLUMN.parentId,
          optional: true,
        })
        .boolean(ATTRIBUTE.isRequired, {
          map: COLUMN.isRequired,
          default: false,
        })

        // dateTime marks
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.COMPANY_MEMBER_TYPE);
    });
  },
);
