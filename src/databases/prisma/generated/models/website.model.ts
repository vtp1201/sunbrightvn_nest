import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { currency, customer, order, Package, service, serviceType, token } from './';

export class website {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  currencyId!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  domain?: string;

  @IsOptional()
  @IsString()
  domainDashboard?: string;

  @IsOptional()
  stripeKey?: Prisma.JsonValue;

  @IsOptional()
  paypalKey?: Prisma.JsonValue;

  @IsOptional()
  mailchimpKey?: Prisma.JsonValue;

  @IsDefined()
  minAmount!: number;

  @IsDefined()
  minUnit!: number;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  emailContact?: string;

  @IsOptional()
  @IsString()
  emailName?: string;

  @IsOptional()
  @IsString()
  emailCode?: string;

  @IsOptional()
  @IsString()
  emailCredential?: string;

  @IsOptional()
  @IsString()
  companiesHouseCredential?: string;

  @IsOptional()
  @IsString()
  analyticsSignature?: string;

  @IsOptional()
  @IsString()
  viewId?: string;

  @IsOptional()
  @IsString()
  emailToken?: string;

  @IsOptional()
  @IsString()
  tawkToWebhook?: string;

  @IsOptional()
  @IsString()
  awsBucketKey?: string;

  @IsOptional()
  @IsString()
  xeroTenantName?: string;

  @IsOptional()
  @IsString()
  xeroTenantId?: string;

  @IsOptional()
  @IsString()
  xeroClientId?: string;

  @IsOptional()
  @IsString()
  xeroClientSecret?: string;

  @IsOptional()
  @IsString()
  xeroHookKey?: string;

  @IsOptional()
  @IsString()
  xeroRedirectUrl?: string;

  @IsOptional()
  @IsString()
  awsBucketLog?: string;

  @IsOptional()
  @IsString()
  googleAdsConfig?: string;

  @IsOptional()
  @IsString()
  endpointSecretStripe?: string;

  @IsDefined()
  minMakePaymentAmount!: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  customers!: customer[];

  @IsDefined()
  orders!: order[];

  @IsDefined()
  packages!: Package[];

  @IsDefined()
  services!: service[];

  @IsDefined()
  serviceTypes!: serviceType[];

  @IsDefined()
  tokens!: token[];

  @IsOptional()
  currency?: currency;
}
