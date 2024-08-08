import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { company, country, customer, entityType, historyCompany, proposedName, service } from './';

export class companySuffix {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDefined()
  @IsBoolean()
  isPrefix!: boolean;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  companies!: company[];

  @IsDefined()
  countries!: country[];

  @IsDefined()
  customers!: customer[];

  @IsDefined()
  entityTypes!: entityType[];

  @IsDefined()
  historyCompanies!: historyCompany[];

  @IsDefined()
  proposedNames!: proposedName[];

  @IsDefined()
  services!: service[];
}
