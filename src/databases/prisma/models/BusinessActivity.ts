import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/BusinessActivity';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.BUSINESS_ACTIVITY,
  (BusinessActivityModel) => {
    BusinessActivityModel.int(ATTRIBUTE.id, {
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
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .string(ATTRIBUTE.sicCode, {
        map: COLUMN.sicCode,
        raw: RAW_STRING.LENGTH_10,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.businessActivityIndustryId, {
        map: COLUMN.businessActivityIndustryId,
        optional: true,
      })
      .json(ATTRIBUTE.labelIds, {
        map: COLUMN.labelIds,
        optional: true,
      })
      .boolean(ATTRIBUTE.isCommon, {
        map: COLUMN.isCommon,
        optional: true,
        default: false,
      })

      // dateTime marks
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.BUSINESS_ACTIVITY);
  },
);
