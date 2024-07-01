import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  RELATION,
} from '../utils/enums/BusinessActivityIndustry';
import { deleted, oneToMany, oneToOne } from '../mixins';
import BusinessActivityIndustryClass from './BusinessActivityIndustryClass';
import Customer from './Customer';
import BusinessActivity from './BusinessActivity';

export default createModel(
  MODEL_NAME.BUSINESS_ACTIVITY_INDUSTRY,
  (BusinessActivityIndustryModel) => {
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
    const businessActivityIndustryClassRelation = oneToOne({
      attribute: ATTRIBUTE.businessActivityIndustryClassId,
      model: BusinessActivityIndustryClass,
      relation: RELATION.businessActivityIndustryClass,
      option: { optional: true },
    });
    const customersRelation = oneToMany({
      model: Customer,
      relation: RELATION.customers,
    });
    const businessActivitiesRelation = oneToMany({
      model: BusinessActivity,
      relation: RELATION.businessActivities,
    });

    // defined Model
    process.nextTick(() => {
      BusinessActivityIndustryModel.int(ATTRIBUTE.id, {
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
        .int(ATTRIBUTE.parentId, {
          map: COLUMN.parentId,
          optional: true,
        })
        .json(ATTRIBUTE.parentIds, {
          map: COLUMN.parentIds,
          optional: true,
        })
        .int(ATTRIBUTE.businessActivityIndustryClassId, {
          map: COLUMN.businessActivityIndustryClassId,
          optional: true,
        })
        .string(ATTRIBUTE.sicCode, {
          map: COLUMN.sicCode,
          raw: RAW_STRING.LENGTH_10,
          optional: true,
        })

        // dateTime marks
        .mixin(initDeleted)

        // relations
        .mixin(businessActivitiesRelation)
        .mixin(businessActivityIndustryClassRelation)
        .mixin(customersRelation)

        // table name
        .map(TABLE_NAME.BUSINESS_ACTIVITY_INDUSTRY);
    });
  },
);
