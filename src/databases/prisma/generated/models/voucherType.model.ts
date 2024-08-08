import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { campaignHasVoucherType, click, voucher } from './';

export class voucherType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  config?: Prisma.JsonValue;

  @IsOptional()
  @IsInt()
  percent?: number;

  @IsDefined()
  @IsString()
  uuid!: string;

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
  campaignHasVoucherTypes!: campaignHasVoucherType[];

  @IsDefined()
  clicks!: click[];

  @IsDefined()
  vouchers!: voucher[];
}
