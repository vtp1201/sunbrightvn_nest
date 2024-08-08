import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  companyPosition,
  fileTemplateHasCompanyMemberType,
  service,
  serviceChangeOfficer,
} from './';

export class companyMemberType {
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
  @IsInt()
  parentId?: number;

  @IsDefined()
  @IsBoolean()
  isRequired!: boolean;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  parent?: companyMemberType;

  @IsDefined()
  children!: companyMemberType[];

  @IsDefined()
  companyPositions!: companyPosition[];

  @IsDefined()
  fileTemplateHasCompanyMemberTypes!: fileTemplateHasCompanyMemberType[];

  @IsDefined()
  serviceChangeOfficers!: serviceChangeOfficer[];

  @IsDefined()
  services!: service[];
}
