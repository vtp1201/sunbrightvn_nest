import { createModel } from 'schemix';

import { country, grantSchemeHasGrantTypeAttribute, grantType, grantTypeAttribute } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/GrantTypeAttribute';
import { RELATION_DEFAULT } from '../utils/enums/default';

export default createModel(MODEL_NAME.GRANT_TYPE_ATTRIBUTE, (GrantTypeAttributeModel) => {
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
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const agencyForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.agencyForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeAgency,
  });
  const businessSizeForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.businessSizeForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeBusinessSize,
  });
  const businessStageForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.businessStageForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeBusinessStage,
  });
  const grantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.grantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeType,
  });
  const localShareholdingForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.localShareholdingForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeLocalShareholding,
  });
  const needsBasedForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.needsBasedForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeNeedsBased,
  });
  const numberEmployeesForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.numberEmployeesForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeNumberEmployees,
  });
  const industryForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.industryForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeIndustry,
  });
  const yearsOperationForGrantSchemeHasGrantTypeAttributesRelation = oneToMany({
    model: grantSchemeHasGrantTypeAttribute,
    relation: RELATION.yearsOperationForGrantSchemeHasGrantTypeAttributes,
    fromRelation: RELATION_DEFAULT.grantTypeAttributeYearsOperation,
  });
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.parentId,
    model: grantTypeAttribute,
    relation: RELATION.parent,
    isNeedName: true,
    option: { optional: true },
  });
  const childrenRelation = oneToMany({
    model: grantTypeAttribute,
    relation: RELATION.children,
    fromRelation: RELATION.parent,
  });
  const grantTypeRelation = oneToOne({
    attribute: ATTRIBUTE.grantTypeId,
    model: grantType,
    relation: RELATION.grantType,
    option: { optional: true },
  });

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

      // relations
      .mixin(countryRelation)
      .mixin(agencyForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(businessSizeForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(businessStageForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(grantSchemeHasGrantTypeAttributesRelation)
      .mixin(localShareholdingForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(industryForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(needsBasedForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(numberEmployeesForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(yearsOperationForGrantSchemeHasGrantTypeAttributesRelation)
      .mixin(parentRelation)
      .mixin(childrenRelation)
      .mixin(grantTypeRelation)

      // indexes
      // .raw(INDEX.countryId)
      // .raw(INDEX.grantTypeId)
      // .raw(INDEX.parentId)

      // table name
      .map(TABLE_NAME.GRANT_TYPE_ATTRIBUTE);
  });
});
