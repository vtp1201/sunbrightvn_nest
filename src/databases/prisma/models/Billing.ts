import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Billing';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  additionProcess,
  country,
  customer,
  user,
  company,
  historyCompany,
  order,
} from './';

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
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
    option: { optional: true },
  });
  const phoneCountryRelation = oneToOne({
    attribute: ATTRIBUTE.phoneCountryId,
    model: country,
    relation: RELATION.phoneCountry,
    option: { optional: true },
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    model: user,
    relation: RELATION.user,
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

      // table name
      .map(TABLE_NAME.BILLING);
  });
});
