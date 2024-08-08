import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { company, historyCompany } from './';

export class companyStatus {
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
  companies!: company[];

  @IsDefined()
  historyCompanies!: historyCompany[];
}
