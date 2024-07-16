import { createModel } from 'schemix';

import {
  Package,
  country,
  customer,
  entityType,
  orderItem,
  packageGroup,
  packageHasService,
  packageType,
  serviceType,
  website,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Package';

export default createModel(MODEL_NAME.PACKAGE, (PackageModel) => {
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
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const orderItemsRelation = oneToMany({
    model: orderItem,
    relation: RELATION.orderItems,
  });
  const packageAnnualRelation = oneToOne({
    attribute: ATTRIBUTE.packageAnnualId,
    model: Package,
    relation: RELATION.packageAnnual,
    isNeedName: true,
    option: { optional: true },
  });
  const belongPackageAnnualsRelation = oneToMany({
    model: Package,
    relation: RELATION.belongPackageAnnuals,
    fromRelation: RELATION.packageAnnual,
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
  });
  const entityTypeRelation = oneToOne({
    attribute: ATTRIBUTE.entityTypeId,
    model: entityType,
    relation: RELATION.entityType,
    option: { optional: true },
  });
  const packageGroupRelation = oneToOne({
    attribute: ATTRIBUTE.packageGroupId,
    model: packageGroup,
    relation: RELATION.packageGroup,
    option: { optional: true },
  });
  const packageTypeRelation = oneToOne({
    attribute: ATTRIBUTE.packageTypeId,
    model: packageType,
    relation: RELATION.packageType,
  });
  const serviceTypeRelation = oneToOne({
    attribute: ATTRIBUTE.serviceTypeId,
    model: serviceType,
    relation: RELATION.serviceType,
    option: { optional: true },
  });
  const websiteRelation = oneToOne({
    attribute: ATTRIBUTE.websiteId,
    model: website,
    relation: RELATION.website,
  });
  const packageHasServicesRelation = oneToMany({
    model: packageHasService,
    relation: RELATION.packageHasServices,
  });

  // defined Model
  process.nextTick(() => {
    PackageModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.packageTypeId, {
        map: COLUMN.packageTypeId,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.xeroItemId, {
        map: COLUMN.xeroItemId,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.xeroItemCode, {
        map: COLUMN.xeroItemCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .int(ATTRIBUTE.packageGroupId, {
        map: COLUMN.packageGroupId,
        optional: true,
      })
      .int(ATTRIBUTE.packageAnnualId, {
        map: COLUMN.packageAnnualId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(customersRelation)
      .mixin(orderItemsRelation)
      .mixin(packageAnnualRelation)
      .mixin(belongPackageAnnualsRelation)
      .mixin(countryRelation)
      .mixin(entityTypeRelation)
      .mixin(packageGroupRelation)
      .mixin(packageTypeRelation)
      .mixin(serviceTypeRelation)
      .mixin(websiteRelation)
      .mixin(packageHasServicesRelation)
      // indexes
      // .raw(INDEX.countryId)
      // .raw(INDEX.entityTypeId)
      // .raw(INDEX.packageAnnualId)
      // .raw(INDEX.packageGroupId)
      // .raw(INDEX.packageTypeId)
      // .raw(INDEX.serviceTypeId)
      // .raw(INDEX.websiteId)

      // table name
      .map(TABLE_NAME.PACKAGE);
  });
});
