import { createModel } from 'schemix';

import { currency, customer, order, Package, service, serviceType, token } from '.';
import { createdTime, deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_NUMBER, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Website';

export default createModel(MODEL_NAME.WEBSITE, (WebsiteModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
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

  // relations defined
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const ordersRelation = oneToMany({
    model: order,
    relation: RELATION.orders,
  });
  const packagesRelation = oneToMany({
    model: Package,
    relation: RELATION.packages,
  });
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });
  const serviceTypesRelation = oneToMany({
    model: serviceType,
    relation: RELATION.serviceTypes,
  });
  const tokensRelation = oneToMany({
    model: token,
    relation: RELATION.tokens,
  });
  const currencyRelation = oneToOne({
    attribute: ATTRIBUTE.currencyId,
    model: currency,
    relation: RELATION.currency,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    WebsiteModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.currencyId, {
        map: COLUMN.currencyId,
        default: 1,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.domain, {
        map: COLUMN.domain,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.domainDashboard, {
        map: COLUMN.domainDashboard,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.stripeKey, {
        map: COLUMN.stripeKey,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.paypalKey, {
        map: COLUMN.paypalKey,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.mailchimpKey, {
        map: COLUMN.mailchimpKey,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .float(ATTRIBUTE.minAmount, {
        map: COLUMN.minAmount,
        raw: RAW_NUMBER.FLOAT,
        default: 0,
      })
      .float(ATTRIBUTE.minUnit, {
        map: COLUMN.minUnit,
        raw: RAW_NUMBER.FLOAT,
        default: 0,
      })
      .string(ATTRIBUTE.email, {
        map: COLUMN.email,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.emailContact, {
        map: COLUMN.emailContact,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.emailName, {
        map: COLUMN.emailName,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.emailCode, {
        map: COLUMN.emailCode,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.emailCredential, {
        map: COLUMN.emailCredential,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.companiesHouseCredential, {
        map: COLUMN.companiesHouseCredential,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.analyticsSignature, {
        map: COLUMN.analyticsSignature,
        raw: RAW_STRING.LENGTH_500,
        optional: true,
      })
      .string(ATTRIBUTE.viewId, {
        map: COLUMN.viewId,
        raw: RAW_STRING.LENGTH_32,
        optional: true,
      })
      .string(ATTRIBUTE.emailToken, {
        map: COLUMN.emailToken,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.tawkToWebhook, {
        map: COLUMN.tawkToWebhook,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.awsBucketKey, {
        map: COLUMN.awsBucketKey,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.xeroTenantName, {
        map: COLUMN.xeroTenantName,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.xeroTenantId, {
        map: COLUMN.xeroTenantId,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.xeroClientId, {
        map: COLUMN.xeroClientId,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.xeroClientSecret, {
        map: COLUMN.xeroClientSecret,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.xeroHookKey, {
        map: COLUMN.xeroHookKey,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.xeroRedirectUrl, {
        map: COLUMN.xeroRedirectUrl,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.awsBucketLog, {
        map: COLUMN.awsBucketLog,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.googleAdsConfig, {
        map: COLUMN.googleAdsConfig,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.endpointSecretStripe, {
        map: COLUMN.endpointSecretStripe,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .float(ATTRIBUTE.minMakePaymentAmount, {
        map: COLUMN.minMakePaymentAmount,
        raw: RAW_NUMBER.FLOAT,
        default: 0,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(customersRelation)
      .mixin(ordersRelation)
      .mixin(packagesRelation)
      .mixin(servicesRelation)
      .mixin(serviceTypesRelation)
      .mixin(tokensRelation)
      .mixin(currencyRelation)

      // indexes
      .raw(INDEX.currencyId)

      // table name
      .map(TABLE_NAME.WEBSITE);
  });
});
