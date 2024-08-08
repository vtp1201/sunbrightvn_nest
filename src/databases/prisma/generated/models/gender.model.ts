import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { companyMember, customer, historyCompanyMember, person } from './';

export class gender {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsString()
  prefix!: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  companyMembers!: companyMember[];

  @IsDefined()
  customers!: customer[];

  @IsDefined()
  historyCompanyMembers!: historyCompanyMember[];

  @IsDefined()
  persons!: person[];
}
