import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { country, gender, typeMember } from './';

export class historyCompanyMember {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  version!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  companyMemberId!: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

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

  @IsOptional()
  companyPositions?: Prisma.JsonValue;

  @IsOptional()
  companyShares?: Prisma.JsonValue;

  @IsOptional()
  companyInterests?: Prisma.JsonValue;

  @IsOptional()
  companyOwnerships?: Prisma.JsonValue;

  @IsOptional()
  files?: Prisma.JsonValue;

  @IsOptional()
  companyMemberReferences?: Prisma.JsonValue;

  @IsOptional()
  businessActivities?: Prisma.JsonValue;

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
  typeMember?: typeMember;

  @IsOptional()
  gender?: gender;

  @IsOptional()
  birthCountry?: country;

  @IsOptional()
  phoneCountry?: country;

  @IsOptional()
  addressCountry?: country;
}
