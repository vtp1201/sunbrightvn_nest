import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { mailchimpCampaignMember, mailchimpSummary } from './';

export class mailchimpCampaign {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  workflowId?: string;

  @IsOptional()
  @IsInt()
  mailchimpTypeId?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsDefined()
  mailchimpCampaignMembers!: mailchimpCampaignMember[];

  @IsDefined()
  mailchimpSummaries!: mailchimpSummary[];
}
