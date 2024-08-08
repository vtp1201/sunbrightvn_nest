import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { airport, order, visaPurpose, visaType } from './';

export class visaOrder {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  orderId!: number;

  @IsOptional()
  @IsInt()
  airportId?: number;

  @IsOptional()
  @IsInt()
  visaPurposeId?: number;

  @IsOptional()
  @IsInt()
  visaTypeId?: number;

  @IsOptional()
  @IsString()
  flightNumber?: string;

  @IsDefined()
  @IsDate()
  arrivalTime!: Date;

  @IsDefined()
  @IsDate()
  entryTime!: Date;

  @IsDefined()
  @IsDate()
  exitTime!: Date;

  @IsDefined()
  @IsDate()
  carPickupTime!: Date;

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
  airport?: airport;

  @IsDefined()
  order!: order;

  @IsOptional()
  visaPurpose?: visaPurpose;

  @IsOptional()
  visaType?: visaType;
}
