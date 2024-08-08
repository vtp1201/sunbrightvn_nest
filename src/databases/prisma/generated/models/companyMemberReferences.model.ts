import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { companyMember, companyMemberIssueReference, country } from './';

export class companyMemberReferences {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  companyMemberId!: number;

  @IsOptional()
  @IsInt()
  companyMemberIssueReferenceId?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsInt()
  phoneCountryId?: number;

  @IsOptional()
  @IsString()
  fax?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;

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
  companyMember!: companyMember;

  @IsOptional()
  companyMemberIssueReference?: companyMemberIssueReference;

  @IsOptional()
  phoneCountry?: country;
}
