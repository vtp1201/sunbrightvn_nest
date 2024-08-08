import { IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { mailchimpCampaign } from './';

export class mailchimpSummary {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  open?: number;

  @IsOptional()
  @IsInt()
  uniqueOpen?: number;

  @IsOptional()
  @IsInt()
  click?: number;

  @IsOptional()
  @IsInt()
  subscriberClick?: number;

  @IsOptional()
  @IsInt()
  emailSent?: number;

  @IsOptional()
  @IsInt()
  unsubscribed?: number;

  @IsOptional()
  @IsInt()
  bounced?: number;

  @IsOptional()
  @IsInt()
  abusedReport?: number;

  @IsDefined()
  @IsInt()
  mailchimpCampaignId!: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  mailchimpCampaign!: mailchimpCampaign;
}
