import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { file, rankingPartnerType, task } from './';

export class rankingPartner {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsOptional()
  @IsInt()
  ranking?: number;

  @IsDefined()
  @IsInt()
  rankingPartnerTypeId!: number;

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
  files!: file[];

  @IsDefined()
  rankingPartnerType!: rankingPartnerType;

  @IsDefined()
  task!: task;
}
