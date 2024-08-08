import { IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { mailchimpCampaign, mailchimpMember } from './';

export class mailchimpCampaignMember {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  mailchimpMemberEmailId!: string;

  @IsDefined()
  @IsInt()
  mailchimpCampaignId!: number;

  @IsOptional()
  @IsString()
  convDate?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsOptional()
  mailchimpCampaign?: mailchimpCampaign;

  @IsDefined()
  mailchimpMember!: mailchimpMember;
}
