import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  airport,
  bank,
  billing,
  businessActivityIndustry,
  campaign,
  companySuffix,
  contactFrom,
  contactFromHistory,
  country,
  customerHasSurveyChoice,
  customerStatus,
  customerType,
  entityType,
  fatca,
  gaChannel,
  gender,
  order,
  Package,
  person,
  task,
  titleName,
  user,
  visaPurpose,
  visaType,
  voucher,
  website,
} from './';

export class customer {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  creditAmount!: number;

  @IsOptional()
  @IsString()
  creditDescription?: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  personId?: number;

  @IsOptional()
  @IsInt()
  campaignAdsId?: number;

  @IsOptional()
  @IsInt()
  clientId?: number;

  @IsOptional()
  @IsInt()
  gaChannelId?: number;

  @IsOptional()
  @IsInt()
  contactFromId?: number;

  @IsOptional()
  @IsInt()
  entityTypeId?: number;

  @IsOptional()
  @IsInt()
  companySuffixId?: number;

  @IsOptional()
  @IsInt()
  companyCountryId?: number;

  @IsOptional()
  @IsInt()
  titleNameId?: number;

  @IsDefined()
  @IsInt()
  websiteId!: number;

  @IsOptional()
  @IsInt()
  customerTypeId?: number;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsInt()
  genderId?: number;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  ccEmail?: string;

  @IsOptional()
  @IsString()
  emailStatus?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsInt()
  phoneCountryId?: number;

  @IsOptional()
  @IsString()
  skype?: string;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  signature?: string;

  @IsOptional()
  @IsString()
  otherType?: string;

  @IsOptional()
  @IsString()
  businessDescription?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsDate()
  entryTime?: Date;

  @IsOptional()
  @IsDate()
  birthday?: Date;

  @IsOptional()
  @IsDate()
  exitTime?: Date;

  @IsOptional()
  @IsString()
  passport?: string;

  @IsOptional()
  @IsString()
  flightNumber?: string;

  @IsOptional()
  @IsDate()
  arrivalTime?: Date;

  @IsOptional()
  @IsInt()
  airportId?: number;

  @IsOptional()
  @IsInt()
  visaPurposeId?: number;

  @IsOptional()
  @IsInt()
  visaTypeId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsString()
  mailchimpId?: string;

  @IsOptional()
  @IsString()
  surveyContent?: string;

  @IsOptional()
  @IsString()
  xeroContactId?: string;

  @IsOptional()
  @IsString()
  logs?: string;

  @IsOptional()
  @IsInt()
  customerStatusId?: number;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  companyRegistrationNo?: string;

  @IsOptional()
  @IsString()
  companyAddress?: string;

  @IsOptional()
  @IsInt()
  companyAddressCountryId?: number;

  @IsOptional()
  @IsString()
  companyAddressCity?: string;

  @IsOptional()
  @IsString()
  companyAddressState?: string;

  @IsOptional()
  @IsString()
  companyAddressPostalCode?: string;

  @IsDefined()
  @IsBoolean()
  isFirstLogin!: boolean;

  @IsOptional()
  @IsInt()
  businessActivityIndustryId?: number;

  @IsOptional()
  @IsInt()
  packageId?: number;

  @IsOptional()
  @IsInt()
  csLeaderId?: number;

  @IsOptional()
  @IsInt()
  csMemberId?: number;

  @IsOptional()
  @IsInt()
  accountantLeaderId?: number;

  @IsOptional()
  @IsInt()
  accountantMemberId?: number;

  @IsOptional()
  @IsInt()
  legalLeaderId?: number;

  @IsOptional()
  @IsInt()
  legalMemberId?: number;

  @IsOptional()
  @IsInt()
  complianceLeaderId?: number;

  @IsOptional()
  @IsInt()
  complianceMemberId?: number;

  @IsOptional()
  @IsInt()
  internalBookeepingLeaderId?: number;

  @IsOptional()
  @IsInt()
  internalBookeepingMemberId?: number;

  @IsOptional()
  @IsInt()
  testerLeaderId?: number;

  @IsOptional()
  timeUnassignedTester?: bigint;

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
  billings!: billing[];

  @IsDefined()
  contactFromHistories!: contactFromHistory[];

  @IsOptional()
  customerStatus?: customerStatus;

  @IsOptional()
  accountantLeader?: user;

  @IsOptional()
  accountantMember?: user;

  @IsOptional()
  complianceLeader?: user;

  @IsOptional()
  complianceMember?: user;

  @IsOptional()
  csLeader?: user;

  @IsOptional()
  csMember?: user;

  @IsOptional()
  country?: country;

  @IsOptional()
  person?: person;

  @IsOptional()
  campaignAds?: campaign;

  @IsOptional()
  gaChannel?: gaChannel;

  @IsOptional()
  contactFrom?: contactFrom;

  @IsOptional()
  entityType?: entityType;

  @IsOptional()
  companySuffix?: companySuffix;

  @IsOptional()
  companyCountry?: country;

  @IsOptional()
  titleName?: titleName;

  @IsOptional()
  internalBookeepingLeader?: user;

  @IsOptional()
  internalBookeepingMember?: user;

  @IsOptional()
  legalLeader?: user;

  @IsOptional()
  legalMember?: user;

  @IsOptional()
  phoneCountry?: country;

  @IsOptional()
  companyAddressCountry?: country;

  @IsOptional()
  website?: website;

  @IsOptional()
  airport?: airport;

  @IsOptional()
  businessActivityIndustry?: businessActivityIndustry;

  @IsOptional()
  customerType?: customerType;

  @IsOptional()
  gender?: gender;

  @IsOptional()
  order?: order;

  @IsOptional()
  package?: Package;

  @IsOptional()
  testerLeader?: user;

  @IsOptional()
  visaPurpose?: visaPurpose;

  @IsOptional()
  visaType?: visaType;

  @IsDefined()
  banks!: bank[];

  @IsDefined()
  customerHasSurveyChoices!: customerHasSurveyChoice[];

  @IsDefined()
  fatcas!: fatca[];

  @IsDefined()
  orders!: order[];

  @IsDefined()
  tasks!: task[];

  @IsDefined()
  users!: user[];

  @IsDefined()
  vouchers!: voucher[];
}
