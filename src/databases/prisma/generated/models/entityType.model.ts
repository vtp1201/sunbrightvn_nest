import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  company,
  companySuffix,
  countryHasEntityType,
  countryHasService,
  customer,
  historyCompany,
  Package,
  task,
  toolBusinessEntity,
} from './';

export class entityType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  guid?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  companies!: company[];

  @IsDefined()
  countryHasEntityTypes!: countryHasEntityType[];

  @IsDefined()
  countryHasServices!: countryHasService[];

  @IsDefined()
  customers!: customer[];

  @IsDefined()
  companySuffixes!: companySuffix[];

  @IsDefined()
  historyCompanies!: historyCompany[];

  @IsDefined()
  packages!: Package[];

  @IsDefined()
  toolBusinessEntities!: toolBusinessEntity[];

  @IsDefined()
  tasks!: task[];
}
