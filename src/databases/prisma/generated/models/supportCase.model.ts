import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { message, order, supportCasePriority, supportCaseStatus, supportCaseType, user } from './';

export class supportCase {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  subject!: string;

  @IsDefined()
  @IsInt()
  userId!: number;

  @IsDefined()
  @IsInt()
  supportCaseTypeId!: number;

  @IsDefined()
  @IsInt()
  supportCaseStatusId!: number;

  @IsDefined()
  @IsInt()
  supportCasePriorityId!: number;

  @IsDefined()
  @IsInt()
  point!: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  messages!: message[];

  @IsDefined()
  supportCasePriority!: supportCasePriority;

  @IsDefined()
  supportCaseStatus!: supportCaseStatus;

  @IsDefined()
  supportCaseType!: supportCaseType;

  @IsDefined()
  user!: user;

  @IsDefined()
  orders!: order[];
}
