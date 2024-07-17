import { createModel } from 'schemix';

import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Billing';
import { additionProcess, company, country, customer, historyCompany, order, user } from './';

export default createModel(MODEL_NAME.BILLING, (BillingModel) => {
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

  // defined Relation
  const additionProcessRelation = oneToOne({
    attribute: ATTRIBUTE.additionProcessId,
    model: additionProcess,
    relation: RELATION.additionProcess,
    map: INDEX_NAME.additionProcessId,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    isNeedName: true,
    map: INDEX_NAME.countryId,
    option: { optional: true },
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
    map: INDEX_NAME.customerId,
    option: { optional: true },
  });
  const phoneCountryRelation = oneToOne({
    attribute: ATTRIBUTE.phoneCountryId,
    model: country,
    relation: RELATION.phoneCountry,
    isNeedName: true,
    map: INDEX_NAME.phoneCountryId,
    option: { optional: true },
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    model: user,
    relation: RELATION.user,
    map: INDEX_NAME.userId,
    option: { optional: true },
  });
  const companiesRelation = oneToMany({
    model: company,
    relation: RELATION.companies,
  });
  const historyCompaniesRelation = oneToMany({
    model: historyCompany,
    relation: RELATION.historyCompanies,
  });
  const ordersRelation = oneToMany({
    model: order,
    relation: RELATION.orders,
  });

  // defined Model
  process.nextTick(() => {
    BillingModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.postalCode, {
        map: COLUMN.postalCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.phone, {
        map: COLUMN.phone,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.address1, {
        map: COLUMN.address1,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.state, {
        map: COLUMN.state,
        raw: RAW_STRING.LENGTH_225,
        optional: true,
      })
      .string(ATTRIBUTE.city, {
        map: COLUMN.city,
        raw: RAW_STRING.LENGTH_225,
        optional: true,
      })
      .string(ATTRIBUTE.firstName, {
        map: COLUMN.firstName,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.lastName, {
        map: COLUMN.lastName,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.phoneNumber, {
        map: COLUMN.phoneNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.phoneCountryId, {
        map: COLUMN.phoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.taxId, {
        raw: RAW_STRING.LENGTH_50,
        map: COLUMN.taxId,
        optional: true,
      })
      .string(ATTRIBUTE.xeroContactId, {
        raw: RAW_STRING.LENGTH_255,
        unique: true,
        map: COLUMN.xeroContactId,
        optional: true,
      })
      .int(ATTRIBUTE.additionProcessId, {
        map: COLUMN.additionProcessId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(additionProcessRelation)
      .mixin(countryRelation)
      .mixin(customerRelation)
      .mixin(phoneCountryRelation)
      .mixin(userRelation)
      .mixin(companiesRelation)
      .mixin(historyCompaniesRelation)
      .mixin(ordersRelation)

      // indexes
      .raw(INDEX.additionProcessId)
      .raw(INDEX.countryId)
      .raw(INDEX.customerId)
      .raw(INDEX.phoneCountryId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.BILLING);
  });
});
