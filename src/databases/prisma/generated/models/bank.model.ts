import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  actionProcessStep,
  agent,
  bankBranch,
  bankHasCountry,
  bankHasKeyword,
  bankingProcess,
  country,
  customer,
  fileTemplate,
  order,
} from './';

export class bank {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  initialDeposit?: number;

  @IsOptional()
  @IsBoolean()
  isVirtual?: boolean;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  country?: country;

  @IsDefined()
  bankBranches!: bankBranch[];

  @IsDefined()
  actionProcessSteps!: actionProcessStep[];

  @IsDefined()
  agents!: agent[];

  @IsDefined()
  bankHasCountries!: bankHasCountry[];

  @IsDefined()
  fileTemplates!: fileTemplate[];

  @IsDefined()
  bankHasKeywords!: bankHasKeyword[];

  @IsDefined()
  bankingProcesses!: bankingProcess[];

  @IsDefined()
  customers!: customer[];

  @IsDefined()
  orders!: order[];
}
