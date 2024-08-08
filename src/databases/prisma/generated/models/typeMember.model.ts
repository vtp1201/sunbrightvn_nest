import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { companyMember, fileTemplateHasCompanyMemberType, historyCompanyMember } from './';

export class typeMember {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  companyMembers!: companyMember[];

  @IsDefined()
  fileTemplateHasCompanyMemberTypes!: fileTemplateHasCompanyMemberType[];

  @IsDefined()
  historyCompanyMembers!: historyCompanyMember[];
}
