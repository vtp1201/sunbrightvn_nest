import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { order, orderItemStatus, Package, service } from './';

export class orderItem {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  orderId!: number;

  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsOptional()
  @IsInt()
  packageId?: number;

  @IsOptional()
  unitPrice?: number;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  amount?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  voucherId?: number;

  @IsOptional()
  @IsInt()
  promotionId?: number;

  @IsDefined()
  @IsBoolean()
  isRefund!: boolean;

  @IsOptional()
  @IsInt()
  discountOrderItemId?: number;

  @IsDefined()
  @IsInt()
  orderItemStatusId!: number;

  @IsOptional()
  @IsDate()
  finishedTime?: Date;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  order!: order;

  @IsDefined()
  orderItemStatus!: orderItemStatus;

  @IsDefined()
  service!: service;

  @IsOptional()
  package?: Package;
}
