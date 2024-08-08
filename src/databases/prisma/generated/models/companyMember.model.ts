import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  answer,
  businessActivity,
  changeRequest,
  company,
  companyInterest,
  companyMemberReferences,
  companyOwnership,
  companyPosition,
  companyShare,
  country,
  email,
  fatca,
  file,
  gender,
  note,
  paymentInformation,
  processLog,
  task,
  token,
  typeMember,
} from './';

export class companyMember {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsInt()
  typeMemberId?: number;

  @IsDefined()
  @IsBoolean()
  isNominee!: boolean;

  @IsDefined()
  @IsBoolean()
  isApproved!: boolean;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  corporationName?: string;

  @IsOptional()
  @IsString()
  corporationNumber?: string;

  @IsOptional()
  @IsDate()
  corporationDate?: Date;

  @IsOptional()
  @IsInt()
  genderId?: number;

  @IsOptional()
  @IsString()
  major?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsDate()
  birthday?: Date;

  @IsOptional()
  @IsInt()
  birthCountryId?: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  passport?: string;

  @IsOptional()
  @IsDate()
  passportIssueDate?: Date;

  @IsOptional()
  @IsDate()
  passportExpireDate?: Date;

  @IsOptional()
  @IsString()
  ssn?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  phoneCountryId?: number;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsInt()
  assetSourceFundCastInBank?: number;

  @IsOptional()
  @IsInt()
  assetSourceFundRealEstate?: number;

  @IsOptional()
  @IsString()
  assetSourceFundOtherDetail?: string;

  @IsOptional()
  @IsInt()
  assetSourceFundOtherMoney?: number;

  @IsOptional()
  @IsInt()
  incomeSourceFundInvestment?: number;

  @IsOptional()
  @IsInt()
  incomeSourceFundSelfEmployed?: number;

  @IsOptional()
  @IsString()
  incomeSourceFundOtherDetail?: string;

  @IsOptional()
  @IsInt()
  incomeSourceFundOtherMoney?: number;

  @IsOptional()
  @IsString()
  businessActivityDetail?: string;

  @IsOptional()
  @IsString()
  serviceAddress?: string;

  @IsOptional()
  @IsString()
  operationAddress?: string;

  @IsOptional()
  @IsString()
  natureBusiness?: string;

  @IsOptional()
  @IsString()
  relationshipIntendedCompany?: string;

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
  @IsInt()
  addressCountryId?: number;

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
  company!: company;

  @IsOptional()
  gender?: gender;

  @IsOptional()
  typeMember?: typeMember;

  @IsOptional()
  country?: country;

  @IsOptional()
  phoneCountry?: country;

  @IsOptional()
  birthCountry?: country;

  @IsOptional()
  addressCountry?: country;

  @IsDefined()
  answers!: answer[];

  @IsDefined()
  changeRequests!: changeRequest[];

  @IsDefined()
  toCompanyMemberForChangeRequests!: changeRequest[];

  @IsDefined()
  companyInterests!: companyInterest[];

  @IsDefined()
  companyCorporationInterests!: companyInterest[];

  @IsDefined()
  businessActivities!: businessActivity[];

  @IsDefined()
  operationCountries!: country[];

  @IsDefined()
  companyMemberReferences!: companyMemberReferences[];

  @IsDefined()
  companyOwnerships!: companyOwnership[];

  @IsDefined()
  companyCorporationOwnerships!: companyOwnership[];

  @IsDefined()
  companyPositions!: companyPosition[];

  @IsDefined()
  companyCorporationPositions!: companyPosition[];

  @IsDefined()
  companyShares!: companyShare[];

  @IsDefined()
  companyCorporationShares!: companyShare[];

  @IsDefined()
  emails!: email[];

  @IsDefined()
  fatcas!: fatca[];

  @IsDefined()
  files!: file[];

  @IsDefined()
  filesFilled!: file[];

  @IsDefined()
  notes!: note[];

  @IsDefined()
  paymentsInformation!: paymentInformation[];

  @IsDefined()
  processLogs!: processLog[];

  @IsDefined()
  processLogsBelongToCompanyMember!: processLog[];

  @IsDefined()
  tasksAppointedDirector!: task[];

  @IsDefined()
  tasksAppointedPresident!: task[];

  @IsDefined()
  tasksAppointedShareholder!: task[];

  @IsDefined()
  tasksAppointedUbo!: task[];

  @IsDefined()
  tokens!: token[];

  @IsDefined()
  tokensToCompanyMember!: token[];
}
