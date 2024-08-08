import { IsBoolean, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { country, fatca } from './';

export class declarationTax {
  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsInt()
  fatcaId!: number;

  @IsOptional()
  @IsString()
  taxReferenceType?: string;

  @IsOptional()
  @IsString()
  taxReferenceNumber?: string;

  @IsDefined()
  @IsBoolean()
  deletedTime!: boolean;

  @IsDefined()
  country!: country;

  @IsDefined()
  fatca!: fatca;
}
