import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { notificationTemplate, service, user } from './';

export class subscription {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  value?: string;

  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsOptional()
  @IsInt()
  numOfCompany?: number;

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
  notificationTemplates!: notificationTemplate[];

  @IsDefined()
  service!: service;

  @IsDefined()
  users!: user[];
}
