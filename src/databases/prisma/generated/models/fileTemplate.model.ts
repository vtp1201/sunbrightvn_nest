import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import {
  bank,
  countryHasEntityType,
  file,
  fileTemplateHasCompanyMemberType,
  fileTemplateHasNationality,
  fileTemplateType,
  processLog,
  processStepHasFileTemplate,
  questionGroup,
  rankingPartnerType,
  serviceChangeOfficer,
  serviceHasFileTemplate,
  token,
} from './';

export class fileTemplate {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  pathTemplate?: string;

  @IsDefined()
  @IsBoolean()
  isNotSigned!: boolean;

  @IsDefined()
  @IsBoolean()
  isESign!: boolean;

  @IsDefined()
  @IsBoolean()
  isSignedForFatca!: boolean;

  @IsDefined()
  @IsBoolean()
  isApprovedDateAppointment!: boolean;

  @IsDefined()
  @IsBoolean()
  isInactive!: boolean;

  @IsOptional()
  @IsInt()
  collectSameId?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsInt()
  fileTemplateTypeId?: number;

  @IsOptional()
  @IsInt()
  fileTypeId?: number;

  @IsOptional()
  dataConfig?: Prisma.JsonValue;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  banks!: bank[];

  @IsDefined()
  countryHasEntityTypes!: countryHasEntityType[];

  @IsDefined()
  files!: file[];

  @IsOptional()
  collectSameFileTemplate?: fileTemplate;

  @IsDefined()
  collectSameFileTemplates!: fileTemplate[];

  @IsOptional()
  parent?: fileTemplate;

  @IsDefined()
  children!: fileTemplate[];

  @IsDefined()
  fileTemplateHasCompanyMemberTypes!: fileTemplateHasCompanyMemberType[];

  @IsDefined()
  fileTemplateHasNationalities!: fileTemplateHasNationality[];

  @IsOptional()
  fileTemplateType?: fileTemplateType;

  @IsDefined()
  rankingPartnerTypes!: rankingPartnerType[];

  @IsDefined()
  processLogs!: processLog[];

  @IsDefined()
  processStepHasFileTemplates!: processStepHasFileTemplate[];

  @IsDefined()
  serviceChangeOfficers!: serviceChangeOfficer[];

  @IsDefined()
  serviceHasFileTemplates!: serviceHasFileTemplate[];

  @IsDefined()
  questionGroups!: questionGroup[];

  @IsDefined()
  tokens!: token[];
}
