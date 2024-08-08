import { IsBoolean, IsDate, IsDefined, IsOptional, IsString } from 'class-validator';

import { mailchimpCampaignMember } from './';

export class mailchimpMember {
  @IsDefined()
  @IsString()
  emailId!: string;

  @IsDefined()
  @IsString()
  emailAddress!: string;

  @IsOptional()
  @IsDate()
  optInTime?: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  mailchimpCampaignMembers!: mailchimpCampaignMember[];
}
