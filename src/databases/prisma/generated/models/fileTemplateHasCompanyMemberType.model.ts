import { IsBoolean, IsDate, IsDefined, IsIn, IsInt, IsOptional } from 'class-validator';

import { generatedFor } from '../enums';
import { getEnumValues } from '../helpers';
import { companyMemberType, fileTemplate, typeMember } from './';

export class fileTemplateHasCompanyMemberType {
  @IsDefined()
  @IsInt()
  fileTemplateId!: number;

  @IsDefined()
  @IsInt()
  companyMemberTypeId!: number;

  @IsOptional()
  @IsInt()
  typeMemberId?: number;

  @IsDefined()
  @IsBoolean()
  isSignedByAll!: boolean;

  @IsDefined()
  @IsBoolean()
  isSignedByAppointed!: boolean;

  @IsDefined()
  @IsBoolean()
  isSignedByIndividual!: boolean;

  @IsDefined()
  @IsBoolean()
  isSignedTransfer!: boolean;

  @IsDefined()
  @IsBoolean()
  isSignedByOldestMember!: boolean;

  @IsDefined()
  @IsIn(getEnumValues(generatedFor))
  generatedFor!: generatedFor;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  companyMemberType!: companyMemberType;

  @IsDefined()
  fileTemplate!: fileTemplate;

  @IsOptional()
  typeMember?: typeMember;
}
