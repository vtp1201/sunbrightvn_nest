import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { campaignHasVoucherType, campaignType, customer } from './';

export class campaign {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  campaignTypeId?: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  campaignType?: campaignType;

  @IsDefined()
  campaignHasVoucherTypes!: campaignHasVoucherType[];

  @IsDefined()
  customers!: customer[];
}
