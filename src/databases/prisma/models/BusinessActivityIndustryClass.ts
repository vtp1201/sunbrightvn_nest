import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  RELATION,
} from '../utils/enums/BusinessActivityIndustryClass';
import { deleted, oneToMany } from '../mixins';
import BusinessActivityIndustry from './BusinessActivityIndustry';

export default createModel(
  MODEL_NAME.BUSINESS_ACTIVITY_INDUSTRY_CLASS,
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

    // defined Relation
    const businessActivityIndustriesRelation = oneToMany({
      model: BusinessActivityIndustry,
      relation: RELATION.businessActivityIndustries,
    });

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
          raw: RAW_STRING.LENGTH_45,
        })

        // dateTime marks
        .mixin(initDeleted)

        // relations
        .mixin(businessActivityIndustriesRelation)

        // table name
        .map(TABLE_NAME.BUSINESS_ACTIVITY_INDUSTRY_CLASS);
    });
  },
);
