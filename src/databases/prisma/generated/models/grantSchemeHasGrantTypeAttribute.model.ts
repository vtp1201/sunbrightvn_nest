import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { grantScheme, grantTypeAttribute } from './';

export class grantSchemeHasGrantTypeAttribute {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  grantSchemeId!: number;

  @IsOptional()
  @IsInt()
  needsBasedId?: number;

  @IsOptional()
  @IsInt()
  industryId?: number;

  @IsOptional()
  @IsInt()
  businessStageId?: number;

  @IsOptional()
  @IsInt()
  yearsOperationId?: number;

  @IsOptional()
  @IsInt()
  businessSizeId?: number;

  @IsOptional()
  @IsInt()
  localShareholdingId?: number;

  @IsOptional()
  @IsInt()
  numberEmployeesId?: number;

  @IsOptional()
  @IsInt()
  typeId?: number;

  @IsOptional()
  @IsInt()
  agencyId?: number;

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
  grantScheme!: grantScheme;

  @IsOptional()
  grantTypeAttributeAgency?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeBusinessSize?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeBusinessStage?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeIndustry?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeLocalShareholding?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeNeedsBased?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeNumberEmployees?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeType?: grantTypeAttribute;

  @IsOptional()
  grantTypeAttributeYearsOperation?: grantTypeAttribute;
}
