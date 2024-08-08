import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { country, grantSchemeHasGrantTypeAttribute, grantType } from './';

export class grantTypeAttribute {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  grantTypeId!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsString()
  grantTypeAttributeCol?: string;

  @IsOptional()
  @IsBoolean()
  isDisabled?: boolean;

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

  @IsOptional()
  country?: country;

  @IsDefined()
  agencyForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  businessSizeForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  businessStageForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  grantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  localShareholdingForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  industryForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  needsBasedForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  numberEmployeesForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsDefined()
  yearsOperationForGrantSchemeHasGrantTypeAttributes!: grantSchemeHasGrantTypeAttribute[];

  @IsOptional()
  parent?: grantTypeAttribute;

  @IsDefined()
  children!: grantTypeAttribute[];

  @IsOptional()
  grantType?: grantType;
}
