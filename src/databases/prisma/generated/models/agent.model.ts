import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { agency, agentType, bank, country, email, processLog, taskHasAgent, token } from './';

export class agent {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsDefined()
  @IsInt()
  agencyId!: number;

  @IsDefined()
  @IsInt()
  agentTypeId!: number;

  @IsOptional()
  @IsInt()
  bankId?: number;

  @IsOptional()
  @IsBoolean()
  isHasNominee?: boolean;

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
  agency!: agency;

  @IsOptional()
  country?: country;

  @IsDefined()
  agentType!: agentType;

  @IsOptional()
  bank?: bank;

  @IsDefined()
  processLogs!: processLog[];

  @IsDefined()
  tokens!: token[];

  @IsDefined()
  emails!: email[];

  @IsDefined()
  taskHasAgents!: taskHasAgent[];
}
