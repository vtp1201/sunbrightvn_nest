import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  answer,
  billing,
  businessActivity,
  changeRequest,
  companyEvent,
  companyInterest,
  companyMember,
  companyOwnership,
  companyShare,
  companyStatus,
  companySuffix,
  country,
  currency,
  email,
  entityType,
  file,
  historyLogCdc,
  note,
  order,
  proposedName,
  task,
} from './';

export class company {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  version!: number;

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
  tin?: string;

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

  @IsOptional()
  @IsString()
  businessActivity?: string;

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

  @IsDefined()
  answers!: answer[];

  @IsDefined()
  changeRequests!: changeRequest[];

  @IsOptional()
  billing?: billing;

  @IsOptional()
  companyStatus?: companyStatus;

  @IsOptional()
  companySuffix?: companySuffix;

  @IsOptional()
  businessCountry?: country;

  @IsOptional()
  country?: country;

  @IsOptional()
  entityType?: entityType;

  @IsOptional()
  operatingCountry?: country;

  @IsDefined()
  companyEvents!: companyEvent[];

  @IsDefined()
  businessActivities!: businessActivity[];

  @IsDefined()
  currencies!: currency[];

  @IsDefined()
  operationCountries!: country[];

  @IsDefined()
  companyInterests!: companyInterest[];

  @IsDefined()
  companyMembers!: companyMember[];

  @IsDefined()
  companyOwnerships!: companyOwnership[];

  @IsDefined()
  companyShares!: companyShare[];

  @IsDefined()
  emails!: email[];

  @IsDefined()
  files!: file[];

  @IsDefined()
  historyLogCDCs!: historyLogCdc[];

  @IsDefined()
  notes!: note[];

  @IsDefined()
  orders!: order[];

  @IsDefined()
  proposedNames!: proposedName[];

  @IsDefined()
  tasks!: task[];
}
