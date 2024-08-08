import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { actionProcessStep, Package, service, serviceTypeHasDepartment, website } from './';

export class serviceType {
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
  left?: number;

  @IsOptional()
  @IsInt()
  right?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsDefined()
  @IsInt()
  websiteId!: number;

  @IsDefined()
  @IsBoolean()
  isActive!: boolean;

  @IsDefined()
  @IsBoolean()
  isRequired!: boolean;

  @IsDefined()
  @IsBoolean()
  isOnly!: boolean;

  @IsOptional()
  processStepTypes?: Prisma.JsonValue;

  @IsOptional()
  @IsInt()
  order?: number;

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
  actionProcessSteps!: actionProcessStep[];

  @IsDefined()
  packages!: Package[];

  @IsDefined()
  services!: service[];

  @IsDefined()
  website!: website;

  @IsOptional()
  parent?: serviceType;

  @IsDefined()
  children!: serviceType[];

  @IsDefined()
  serviceTypeHasDepartments!: serviceTypeHasDepartment[];
}
