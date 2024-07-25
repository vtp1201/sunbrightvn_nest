import { createModel } from 'schemix';

import {
  airport,
  carSeat,
  carType,
  companyEvent,
  companyMemberType,
  companySuffix,
  countryHasService,
  fee,
  orderItem,
  packageHasService,
  service,
  serviceHasFileTemplate,
  serviceType,
  serviceUnit,
  subscription,
  visaPurpose,
  visaType,
  website,
  xeroAccount,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Service';

export default createModel(MODEL_NAME.SERVICE, (ServiceModel) => {
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
  const companyEventsRelation = oneToMany({
    model: companyEvent,
    relation: RELATION.companyEvents,
  });
  const countryHasServicesRelation = oneToMany({
    model: countryHasService,
    relation: RELATION.countryHasServices,
  });
  const feesRelation = oneToMany({
    model: fee,
    relation: RELATION.fees,
  });
  const orderItemsRelation = oneToMany({
    model: orderItem,
    relation: RELATION.orderItems,
  });
  const packageHasServicesRelation = oneToMany({
    model: packageHasService,
    relation: RELATION.packageHasServices,
  });
  const discountServiceRelation = oneToOne({
    attribute: ATTRIBUTE.discountServiceId,
    map: INDEX_NAME.discountServiceId,
    model: service,
    relation: RELATION.discountService,
    isNeedName: true,
    option: { optional: true },
  });
  const discountForServicesRelation = oneToMany({
    model: service,
    relation: RELATION.discountForServices,
    fromRelation: RELATION.discountService,
  });
  const airportRelation = oneToOne({
    attribute: ATTRIBUTE.airportId,
    map: INDEX_NAME.airportId,
    model: airport,
    relation: RELATION.airport,
    option: { optional: true },
  });
  const carSeatRelation = oneToOne({
    attribute: ATTRIBUTE.carSeatId,
    map: INDEX_NAME.carSeatId,
    model: carSeat,
    relation: RELATION.carSeat,
    option: { optional: true },
  });
  const carTypeRelation = oneToOne({
    attribute: ATTRIBUTE.carTypeId,
    map: INDEX_NAME.carTypeId,
    model: carType,
    relation: RELATION.carType,
    option: { optional: true },
  });
  const serviceTypeRelation = oneToOne({
    attribute: ATTRIBUTE.serviceTypeId,
    map: INDEX_NAME.serviceTypeId,
    model: serviceType,
    relation: RELATION.serviceType,
  });
  const serviceUnitRelation = oneToOne({
    attribute: ATTRIBUTE.serviceUnitId,
    map: INDEX_NAME.serviceUnitId,
    model: serviceUnit,
    relation: RELATION.serviceUnit,
    option: { optional: true },
  });
  const visaPurposeRelation = oneToOne({
    attribute: ATTRIBUTE.visaPurposeId,
    map: INDEX_NAME.visaPurposeId,
    model: visaPurpose,
    relation: RELATION.visaPurpose,
    option: { optional: true },
  });
  const visaTypeRelation = oneToOne({
    attribute: ATTRIBUTE.visaTypeId,
    map: INDEX_NAME.visaTypeId,
    model: visaType,
    relation: RELATION.visaType,
    option: { optional: true },
  });
  const websiteRelation = oneToOne({
    attribute: ATTRIBUTE.websiteId,
    map: INDEX_NAME.websiteId,
    model: website,
    relation: RELATION.website,
    option: { optional: true },
  });
  const upgradeServiceRelation = oneToOne({
    attribute: ATTRIBUTE.upgradeServiceId,
    map: INDEX_NAME.upgradeServiceId,
    model: service,
    relation: RELATION.upgradeService,
    isNeedName: true,
    option: { optional: true },
  });
  const upgradeForServicesRelation = oneToMany({
    model: service,
    relation: RELATION.upgradeForServices,
    fromRelation: RELATION.upgradeService,
  });
  const xeroAccountRelation = oneToOne({
    attribute: ATTRIBUTE.xeroAccountId,
    map: INDEX_NAME.xeroAccountId,
    model: xeroAccount,
    relation: RELATION.xeroAccount,
    option: { optional: true },
  });
  const companyMemberTypesRelation = oneToMany({
    model: companyMemberType,
    relation: RELATION.companyMemberTypes,
  });
  const companySuffixesRelation = oneToMany({
    model: companySuffix,
    relation: RELATION.companySuffixes,
  });
  const serviceHasFileTemplatesRelation = oneToMany({
    model: serviceHasFileTemplate,
    relation: RELATION.serviceHasFileTemplates,
  });
  const subscriptionsRelation = oneToMany({
    model: subscription,
    relation: RELATION.subscriptions,
  });

  // defined Model
  process.nextTick(() => {
    ServiceModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
      })
      .int(ATTRIBUTE.visaTypeId, {
        map: COLUMN.visaTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.visaPurposeId, {
        map: COLUMN.visaPurposeId,
        optional: true,
      })
      .int(ATTRIBUTE.carTypeId, {
        map: COLUMN.carTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.carSeatId, {
        map: COLUMN.carSeatId,
        optional: true,
      })
      .int(ATTRIBUTE.airportId, {
        map: COLUMN.airportId,
        optional: true,
      })
      .int(ATTRIBUTE.serviceUnitId, {
        map: COLUMN.serviceUnitId,
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
      .string(ATTRIBUTE.uuid, {
        map: COLUMN.uuid,
        raw: RAW_STRING.CHAR_36,
        optional: true,
      })
      .int(ATTRIBUTE.xeroAccountId, {
        map: COLUMN.xeroAccountId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isActive, {
        map: COLUMN.isActive,
        default: true,
      })
      .boolean(ATTRIBUTE.isServiceOutsideCompany, {
        map: COLUMN.isServiceOutsideCompany,
        default: false,
      })
      .boolean(ATTRIBUTE.isDisplayed, {
        map: COLUMN.isDisplayed,
        default: true,
      })
      .boolean(ATTRIBUTE.isAttachIncorp, {
        map: COLUMN.isAttachIncorp,
        default: true,
      })
      .int(ATTRIBUTE.quantity, {
        map: COLUMN.quantity,
        optional: true,
      })
      .int(ATTRIBUTE.upgradeServiceId, {
        map: COLUMN.upgradeServiceId,
        optional: true,
      })
      .int(ATTRIBUTE.discountServiceId, {
        map: COLUMN.discountServiceId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyEventsRelation)
      .mixin(countryHasServicesRelation)
      .mixin(feesRelation)
      .mixin(orderItemsRelation)
      .mixin(packageHasServicesRelation)
      .mixin(discountServiceRelation)
      .mixin(discountForServicesRelation)
      .mixin(airportRelation)
      .mixin(carSeatRelation)
      .mixin(carTypeRelation)
      .mixin(serviceTypeRelation)
      .mixin(serviceUnitRelation)
      .mixin(visaPurposeRelation)
      .mixin(visaTypeRelation)
      .mixin(websiteRelation)
      .mixin(upgradeServiceRelation)
      .mixin(upgradeForServicesRelation)
      .mixin(xeroAccountRelation)
      .mixin(companyMemberTypesRelation)
      .mixin(companySuffixesRelation)
      .mixin(serviceHasFileTemplatesRelation)
      .mixin(subscriptionsRelation)

      // indexes
      .raw(INDEX.airportId)
      .raw(INDEX.carSeatId)
      .raw(INDEX.carTypeId)
      .raw(INDEX.discountServiceId)
      .raw(INDEX.serviceTypeId)
      .raw(INDEX.serviceUnitId)
      .raw(INDEX.upgradeServiceId)
      .raw(INDEX.visaPurposeId)
      .raw(INDEX.visaTypeId)
      .raw(INDEX.websiteId)
      .raw(INDEX.xeroAccountId)

      // table name
      .map(TABLE_NAME.SERVICE);
  });
});
