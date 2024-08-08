import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { customer, order, voucherType } from './';

export class voucher {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsDefined()
  @IsString()
  voucherCode!: string;

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsInt()
  googleClientId?: number;

  @IsOptional()
  @IsInt()
  voucherTypeId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsDefined()
  @IsBoolean()
  isActive!: boolean;

  @IsDefined()
  @IsBoolean()
  isUsed!: boolean;

  @IsDefined()
  @IsBoolean()
  isRunning!: boolean;

  @IsDefined()
  @IsDate()
  expiredTime!: Date;

  @IsDefined()
  @IsDate()
  activeDate!: Date;

  @IsDefined()
  @IsDate()
  usedDate!: Date;

  @IsDefined()
  @IsDate()
  openDate!: Date;

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
  customer?: customer;

  @IsOptional()
  order?: order;

  @IsOptional()
  voucherType?: voucherType;
}
