import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
} from '../utils/enums/BusinessActivityIndustryClass';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.BUSINESS_ACTIVITY_LABEL,
  (BusinessActivityIndustryClassModel) => {
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
      BusinessActivityIndustryClassModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.TEXT,
        })

        // dateTime marks
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.BUSINESS_ACTIVITY_LABEL);
    });
  },
);
