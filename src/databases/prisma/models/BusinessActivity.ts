import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/BusinessActivity';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { businessActivityIndustry, country, company, companyMember } from './';

export default createModel(
  MODEL_NAME.BUSINESS_ACTIVITY,
  (BusinessActivityModel) => {
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
    const businessActivityIndustryRelation = oneToOne({
      attribute: ATTRIBUTE.businessActivityIndustryId,
      model: businessActivityIndustry,
      relation: RELATION.businessActivityIndustry,
      option: { optional: true },
    });
    const countryRelation = oneToOne({
      attribute: ATTRIBUTE.countryId,
      model: country,
      relation: RELATION.country,
      option: { optional: true },
    });
    const companiesRelation = oneToMany({
      model: company,
      relation: RELATION.companies,
    });
    const companyMembersRelation = oneToMany({
      model: companyMember,
      relation: RELATION.companyMembers,
    });

    // defined Model
    process.nextTick(() => {
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
        .mixin(initDeleted)

        // relations
        .mixin(businessActivityIndustryRelation)
        .mixin(countryRelation)
        .mixin(companiesRelation)
        .mixin(companyMembersRelation)

        // table name
        .map(TABLE_NAME.BUSINESS_ACTIVITY);
    });
  },
);
