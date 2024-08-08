import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { actionProcessStep, historyLogCdc, notificationTemplate } from './';

export class actionStepType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

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
  actionProcessSteps!: actionProcessStep[];

  @IsDefined()
  historyLogCDCs!: historyLogCdc[];

  @IsDefined()
  notificationTemplates!: notificationTemplate[];
}
