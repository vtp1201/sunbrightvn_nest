import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import {
  changeRequest,
  companyInterest,
  companyMember,
  companyMemberType,
  companyOwnership,
  companyShare,
} from './';

export class companyPosition {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  companyMemberId!: number;

  @IsDefined()
  @IsInt()
  companyMemberTypeId!: number;

  @IsOptional()
  @IsInt()
  corporationCompanyMemberId?: number;

  @IsDefined()
  @IsInt()
  numberAllotted!: number;

  @IsDefined()
  percentOfInterest!: number;

  @IsDefined()
  ownPercent!: number;

  @IsOptional()
  @IsDate()
  dateOfAppointment?: Date;

  @IsOptional()
  @IsDate()
  dateOfResign?: Date;

  @IsDefined()
  @IsBoolean()
  isAppointed!: boolean;

  @IsDefined()
  @IsBoolean()
  isApproved!: boolean;

  @IsDefined()
  @IsBoolean()
  isContactPerson!: boolean;

  @IsDefined()
  @IsBoolean()
  isHandleRelationshipContactPerson!: boolean;

  @IsOptional()
  @IsString()
  positionDetail?: string;

  @IsOptional()
  relationshipWithCompany?: Prisma.JsonValue;

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
  companyMemberType!: companyMemberType;

  @IsDefined()
  companyMember!: companyMember;

  @IsOptional()
  corporationCompanyMember?: companyMember;

  @IsDefined()
  changeRequests!: changeRequest[];

  @IsDefined()
  toCompanyPositionForChangeRequests!: changeRequest[];

  @IsDefined()
  companyInterests!: companyInterest[];

  @IsDefined()
  companyOwnerships!: companyOwnership[];

  @IsDefined()
  companyShares!: companyShare[];
}
