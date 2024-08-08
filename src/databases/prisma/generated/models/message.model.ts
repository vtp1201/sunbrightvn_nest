import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { file, supportCase, user } from './';

export class message {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  userId!: number;

  @IsDefined()
  @IsInt()
  supportCaseId!: number;

  @IsOptional()
  @IsString()
  content?: string;

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
  files!: file[];

  @IsDefined()
  supportCase!: supportCase;

  @IsDefined()
  user!: user;
}
