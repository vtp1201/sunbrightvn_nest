import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { companyMemberReferences } from './';

export class companyMemberIssueReference {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

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
  companyMemberReferences!: companyMemberReferences[];
}
