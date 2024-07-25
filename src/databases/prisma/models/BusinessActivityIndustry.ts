import { createModel } from 'schemix';

import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  INDEX_NAME,
  RELATION,
} from '../utils/enums/BusinessActivityIndustry';
import { businessActivity, businessActivityIndustryClass, country, customer } from './';

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
    const countryRelation = oneToOne({
      attribute: ATTRIBUTE.countryId,
      map: INDEX_NAME.countryId,
      model: country,
      relation: RELATION.country,
      option: { optional: true },
    });
    const businessActivityIndustryClassRelation = oneToOne({
      attribute: ATTRIBUTE.businessActivityIndustryClassId,
      map: INDEX_NAME.businessActivityIndustryClassId,
      model: businessActivityIndustryClass,
      relation: RELATION.businessActivityIndustryClass,
      option: { optional: true },
    });
    const customersRelation = oneToMany({
      model: customer,
      relation: RELATION.customers,
    });
    const businessActivitiesRelation = oneToMany({
      model: businessActivity,
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
        .mixin(countryRelation)
        .mixin(businessActivitiesRelation)
        .mixin(businessActivityIndustryClassRelation)
        .mixin(customersRelation)

        // indexes
        .raw(INDEX.businessActivityIndustryClassId)
        .raw(INDEX.countryId)

        // table name
        .map(TABLE_NAME.BUSINESS_ACTIVITY_INDUSTRY);
    });
  },
);
