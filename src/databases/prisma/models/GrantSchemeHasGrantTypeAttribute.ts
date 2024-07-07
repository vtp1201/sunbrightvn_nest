import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  RELATION,
} from '../utils/enums/GrantSchemeHasGrantTypeAttribute';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { grantScheme, grantTypeAttribute } from '.';

export default createModel(
  MODEL_NAME.GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE,
  (GrantSchemeHasGrantTypeAttributeModel) => {
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

    // defined Relations
    const grantSchemeRelation = oneToOne({
      attribute: ATTRIBUTE.grantSchemeId,
      model: grantScheme,
      relation: RELATION.grantScheme,
    });
    const grantTypeAttributeAgencyRelation = oneToOne({
      attribute: ATTRIBUTE.agencyId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeAgency,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeBusinessSizeRelation = oneToOne({
      attribute: ATTRIBUTE.businessSizeId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeBusinessSize,
      isNeedName: true,
      option: { optional: true },
    });

    const grantTypeAttributeBusinessStageRelation = oneToOne({
      attribute: ATTRIBUTE.businessStageId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeBusinessStage,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeIndustryRelation = oneToOne({
      attribute: ATTRIBUTE.industryId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeIndustry,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeLocalShareholdingRelation = oneToOne({
      attribute: ATTRIBUTE.localShareholdingId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeLocalShareholding,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeNeedsBasedRelation = oneToOne({
      attribute: ATTRIBUTE.needsBasedId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeNeedsBased,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeNumberEmployeesRelation = oneToOne({
      attribute: ATTRIBUTE.numberEmployeesId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeNumberEmployees,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeTypeRelation = oneToOne({
      attribute: ATTRIBUTE.typeId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeType,
      isNeedName: true,
      option: { optional: true },
    });
    const grantTypeAttributeYearsOperationRelation = oneToOne({
      attribute: ATTRIBUTE.yearsOperationId,
      model: grantTypeAttribute,
      relation: RELATION.grantTypeAttributeYearsOperation,
      isNeedName: true,
      option: { optional: true },
    });

    // defined Model
    process.nextTick(() => {
      GrantSchemeHasGrantTypeAttributeModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.grantSchemeId, {
          map: COLUMN.grantSchemeId,
        })
        .int(ATTRIBUTE.needsBasedId, {
          map: COLUMN.needsBasedId,
          optional: true,
        })
        .int(ATTRIBUTE.industryId, {
          map: COLUMN.industryId,
          optional: true,
        })
        .int(ATTRIBUTE.businessStageId, {
          map: COLUMN.businessStageId,
          optional: true,
        })
        .int(ATTRIBUTE.yearsOperationId, {
          map: COLUMN.yearsOperationId,
          optional: true,
        })
        .int(ATTRIBUTE.businessSizeId, {
          map: COLUMN.businessSizeId,
          optional: true,
        })
        .int(ATTRIBUTE.localShareholdingId, {
          map: COLUMN.localShareholdingId,
          optional: true,
        })
        .int(ATTRIBUTE.numberEmployeesId, {
          map: COLUMN.numberEmployeesId,
          optional: true,
        })
        .int(ATTRIBUTE.typeId, {
          map: COLUMN.typeId,
          optional: true,
        })
        .int(ATTRIBUTE.agencyId, {
          map: COLUMN.agencyId,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(grantSchemeRelation)
        .mixin(grantTypeAttributeAgencyRelation)
        .mixin(grantTypeAttributeBusinessSizeRelation)
        .mixin(grantTypeAttributeBusinessStageRelation)
        .mixin(grantTypeAttributeIndustryRelation)
        .mixin(grantTypeAttributeLocalShareholdingRelation)
        .mixin(grantTypeAttributeNeedsBasedRelation)
        .mixin(grantTypeAttributeNumberEmployeesRelation)
        .mixin(grantTypeAttributeTypeRelation)
        .mixin(grantTypeAttributeYearsOperationRelation)

        // indexes
        // .raw(INDEX.agencyId)
        // .raw(INDEX.businessSizeId)
        // .raw(INDEX.businessStageId)
        // .raw(INDEX.grantSchemeId)
        // .raw(INDEX.industryId)
        // .raw(INDEX.localShareholdingId)
        // .raw(INDEX.needsBasedId)
        // .raw(INDEX.numberEmployeesId)
        // .raw(INDEX.typeId)
        // .raw(INDEX.yearsOperationId)

        // table name
        .map(TABLE_NAME.GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE);
    });
  },
);
