import { IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { agent, companyMember, fileTemplate, task, user, website } from './';

export class token {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsDefined()
  @IsString()
  accessToken!: string;

  @IsDefined()
  @IsInt()
  accessTokenExp!: number;

  @IsDefined()
  @IsInt()
  accessTokenIat!: number;

  @IsDefined()
  @IsString()
  refreshToken!: string;

  @IsDefined()
  @IsInt()
  refreshTokenExp!: number;

  @IsDefined()
  @IsInt()
  refreshTokenIat!: number;

  @IsOptional()
  @IsString()
  scope?: string;

  @IsOptional()
  @IsInt()
  tokenType?: number;

  @IsOptional()
  @IsString()
  xeroTokenType?: string;

  @IsOptional()
  @IsString()
  xeroIdToken?: string;

  @IsOptional()
  @IsString()
  xeroSessionState?: string;

  @IsOptional()
  @IsInt()
  websiteId?: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  agentId?: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  fileTemplateId?: number;

  @IsOptional()
  @IsInt()
  belongToCompanyMemberId?: number;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsInt()
  countRequest?: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsOptional()
  agent?: agent;

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  belongToCompanyMember?: companyMember;

  @IsOptional()
  fileTemplate?: fileTemplate;

  @IsOptional()
  task?: task;

  @IsOptional()
  user?: user;

  @IsOptional()
  website?: website;
}
