import { IsDefined, IsInt, IsOptional } from 'class-validator';

import { Prisma } from '@prisma/client';

import { campaign, voucherType } from './';

export class campaignHasVoucherType {
  @IsDefined()
  @IsInt()
  campaignId!: number;

  @IsDefined()
  @IsInt()
  voucherTypeId!: number;

  @IsOptional()
  @IsInt()
  totalQuantity?: number;

  @IsOptional()
  @IsInt()
  remainingQuantity?: number;

  @IsOptional()
  @IsInt()
  percent?: number;

  @IsOptional()
  config?: Prisma.JsonValue;

  @IsDefined()
  campaign!: campaign;

  @IsDefined()
  voucherType!: voucherType;
}
