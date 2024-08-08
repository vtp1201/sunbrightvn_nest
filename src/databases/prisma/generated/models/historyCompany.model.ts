import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { billing, companyStatus, companySuffix, country, entityType } from './';

export class historyCompany {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  version!: number;

  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsOptional()
  @IsString()
  companyCode?: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsString()
  companyRegNo?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  companyStatusId?: number;

  @IsOptional()
  @IsInt()
  entityTypeId?: number;

  @IsOptional()
  @IsInt()
  companySuffixId?: number;

  @IsOptional()
  @IsString()
  preventiveName?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  tax?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsDate()
  incorporationDate?: Date;

  @IsOptional()
  @IsString()
  xeroContactId?: string;

  @IsDefined()
  @IsBoolean()
  isOutsideCompany!: boolean;

  @IsOptional()
  @IsDate()
  renewalDate?: Date;

  @IsOptional()
  @IsInt()
  billingId?: number;

  @IsOptional()
  @IsString()
  contactFullName?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsOptional()
  @IsString()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  contactAddress?: string;

  @IsOptional()
  @IsString()
  tinCode?: string;

  @IsOptional()
  @IsString()
  pinCode?: string;

  @IsOptional()
  @IsInt()
  contactPhoneCountryId?: number;

  @IsOptional()
  @IsString()
  contactPhoneNumber?: string;

  @IsOptional()
  @IsString()
  contactState?: string;

  @IsOptional()
  @IsString()
  contactCity?: string;

  @IsOptional()
  @IsString()
  contactPostalCode?: string;

  @IsOptional()
  @IsInt()
  operatingCountryId?: number;

  @IsOptional()
  @IsString()
  operatingCity?: string;

  @IsOptional()
  @IsString()
  operatingState?: string;

  @IsOptional()
  @IsString()
  operatingPostalCode?: string;

  @IsOptional()
  @IsString()
  sourceFund?: string;

  @IsOptional()
  @IsString()
  businessFullName?: string;

  @IsOptional()
  @IsString()
  businessAddress?: string;

  @IsOptional()
  @IsInt()
  businessCountryId?: number;

  @IsOptional()
  @IsString()
  businessCity?: string;

  @IsOptional()
  @IsString()
  businessState?: string;

  @IsOptional()
  @IsString()
  businessPostalCode?: string;

  @IsOptional()
  @IsInt()
  businessDayEnd?: number;

  @IsOptional()
  @IsInt()
  businessMonthEnd?: number;

  @IsOptional()
  @IsInt()
  shareCapitalParValue?: number;

  @IsOptional()
  @IsInt()
  shareCapitalTypeOfShare?: number;

  @IsOptional()
  @IsInt()
  shareCapitalNumberShare?: number;

  @IsOptional()
  @IsInt()
  shareCapital?: number;

  @IsOptional()
  @IsString()
  shareCapitalClassOfShare?: string;

  @IsOptional()
  @IsInt()
  issuedNumberShare?: number;

  @IsOptional()
  @IsInt()
  remainingNumberShare?: number;

  @IsOptional()
  @IsInt()
  articlesOfOrganization?: number;

  @IsOptional()
  @IsString()
  recordNumber?: string;

  @IsOptional()
  @IsInt()
  numOfCheckingBank?: number;

  @IsOptional()
  @IsString()
  businessAnnualReport?: string;

  @IsOptional()
  @IsString()
  sealImage?: string;

  @IsOptional()
  @IsInt()
  leftCheckingBank?: number;

  @IsOptional()
  @IsInt()
  businessActivityDetail?: number;

  @IsDefined()
  CompanyHasBusinessActivity!: Prisma.JsonValue;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  country?: country;

  @IsOptional()
  companyStatus?: companyStatus;

  @IsOptional()
  contactPhoneCountry?: country;

  @IsOptional()
  entityType?: entityType;

  @IsOptional()
  companySuffix?: companySuffix;

  @IsOptional()
  businessCountry?: country;

  @IsOptional()
  billing?: billing;

  @IsOptional()
  operatingCountry?: country;
}
