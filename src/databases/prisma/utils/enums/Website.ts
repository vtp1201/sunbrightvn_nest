import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  currencyId = 'currencyId',
  name = 'name',
  domain = 'domain',
  domainDashboard = 'domainDashboard',
  stripeKey = 'stripeKey',
  paypalKey = 'paypalKey',
  mailchimpKey = 'mailchimpKey',
  minAmount = 'minAmount',
  minUnit = 'minUnit',
  email = 'email',
  emailContact = 'emailContact',
  emailName = 'emailName',
  emailCode = 'emailCode',
  emailCredential = 'emailCredential',
  companiesHouseCredential = 'companiesHouseCredential',
  analyticsSignature = 'analyticsSignature',
  viewId = 'viewId',
  emailToken = 'emailToken',
  tawkToWebhook = 'tawkToWebhook',
  awsBucketKey = 'awsBucketKey',
  xeroTenantName = 'xeroTenantName',
  xeroTenantId = 'xeroTenantId',
  xeroClientId = 'xeroClientId',
  xeroClientSecret = 'xeroClientSecret',
  xeroHookKey = 'xeroHookKey',
  xeroRedirectUrl = 'xeroRedirectUrl',
  awsBucketLog = 'awsBucketLog',
  googleAdsConfig = 'googleAdsConfig',
  endpointSecretStripe = 'endpointSecretStripe',
  minMakePaymentAmount = 'minMakePaymentAmount',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  currencyId = 'currency_id',
  name = 'name',
  domain = 'domain',
  domainDashboard = 'domain_dashboard',
  stripeKey = 'stripe_key',
  paypalKey = 'paypal_key',
  mailchimpKey = 'mailchimp_key',
  minAmount = 'min_amount',
  minUnit = 'min_unit',
  email = 'email',
  emailContact = 'email_contact',
  emailName = 'email_name',
  emailCode = 'email_code',
  emailCredential = 'email_credential',
  companiesHouseCredential = 'companies_house_credential',
  analyticsSignature = 'analytics_signature',
  viewId = 'view_id',
  emailToken = 'email_token',
  tawkToWebhook = 'tawk_to_webhook',
  awsBucketKey = 'aws_bucket_key',
  xeroTenantName = 'xero_tenant_name',
  xeroTenantId = 'xero_tenant_id',
  xeroClientId = 'xero_client_id',
  xeroClientSecret = 'xero_client_secret',
  xeroHookKey = 'xero_hook_key',
  xeroRedirectUrl = 'xero_redirect_url',
  awsBucketLog = 'aws_bucket_log',
  googleAdsConfig = 'google_ads_config',
  endpointSecretStripe = 'endpoint_secret_stripe',
  minMakePaymentAmount = 'min_make_payment_amount',
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  currency = RELATION_DEFAULT.currency,
  customers = RELATION_DEFAULT.customers,
  packages = RELATION_DEFAULT.packages,
  orders = RELATION_DEFAULT.orders,
  services = RELATION_DEFAULT.services,
  serviceTypes = RELATION_DEFAULT.serviceTypes,
  tokens = RELATION_DEFAULT.tokens,
}

const tableName = TABLE_NAME.WEBSITE;
export enum INDEX_NAME {
  currencyId = `"${tableName}_${COLUMN.currencyId}_fkey"`,
}

export enum INDEX {
  currencyId = `@@index([${ATTRIBUTE.currencyId}], map: ${INDEX_NAME.currencyId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
