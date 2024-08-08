import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { company, companyEventType, file, order, service } from './';

export class companyEvent {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  dateCompleted?: Date;

  @IsOptional()
  @IsDate()
  dueDate?: Date;

  @IsOptional()
  @IsDate()
  dateRemind?: Date;

  @IsDefined()
  @IsBoolean()
  isNotShow!: boolean;

  @IsOptional()
  @IsInt()
  companyEventTypeId?: number;

  @IsDefined()
  @IsBoolean()
  isNotifyDueRenewal!: boolean;

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
  companyEventType?: companyEventType;

  @IsDefined()
  company!: company;

  @IsOptional()
  order?: order;

  @IsDefined()
  service!: service;

  @IsDefined()
  files!: file[];
}
