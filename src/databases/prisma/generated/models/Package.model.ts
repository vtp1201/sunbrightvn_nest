import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  country,
  customer,
  entityType,
  orderItem,
  packageGroup,
  packageHasService,
  packageType,
  serviceType,
  website,
} from './';

export class Package {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  serviceTypeId?: number;

  @IsDefined()
  @IsInt()
  packageTypeId!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsInt()
  websiteId!: number;

  @IsOptional()
  @IsInt()
  entityTypeId?: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  xeroItemId?: string;

  @IsOptional()
  @IsString()
  xeroItemCode?: string;

  @IsOptional()
  @IsInt()
  packageGroupId?: number;

  @IsOptional()
  @IsInt()
  packageAnnualId?: number;

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
  customers!: customer[];

  @IsDefined()
  orderItems!: orderItem[];

  @IsOptional()
  packageAnnual?: Package;

  @IsDefined()
  belongPackageAnnuals!: Package[];

  @IsDefined()
  country!: country;

  @IsOptional()
  entityType?: entityType;

  @IsOptional()
  packageGroup?: packageGroup;

  @IsDefined()
  packageType!: packageType;

  @IsOptional()
  serviceType?: serviceType;

  @IsDefined()
  website!: website;

  @IsDefined()
  packageHasServices!: packageHasService[];
}
