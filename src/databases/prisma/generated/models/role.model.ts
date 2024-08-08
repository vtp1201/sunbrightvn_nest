import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import {
  emailTemplateHasReceiver,
  limit,
  notificationTemplate,
  permission,
  processStepHasRole,
  user,
} from './';

export class role {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsString()
  value!: string;

  @IsOptional()
  @IsInt()
  left?: number;

  @IsOptional()
  @IsInt()
  right?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDefined()
  @IsInt()
  status!: number;

  @IsOptional()
  colorCode?: Prisma.JsonValue;

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
  emailTemplateHasReceivers!: emailTemplateHasReceiver[];

  @IsDefined()
  notificationTemplates!: notificationTemplate[];

  @IsDefined()
  processStepHasRoles!: processStepHasRole[];

  @IsOptional()
  parent?: role;

  @IsDefined()
  children!: role[];

  @IsDefined()
  limits!: limit[];

  @IsDefined()
  permissions!: permission[];

  @IsDefined()
  users!: user[];
}
