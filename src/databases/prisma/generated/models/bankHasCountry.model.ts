import { IsBoolean, IsDefined, IsInt, IsOptional } from 'class-validator';

import { bank, country } from './';

export class bankHasCountry {
  @IsDefined()
  @IsInt()
  bankId!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsOptional()
  @IsBoolean()
  isMemberCountry?: boolean;

  @IsOptional()
  @IsBoolean()
  isPartnerCountry?: boolean;

  @IsOptional()
  @IsBoolean()
  isOwnerCountry?: boolean;

  @IsOptional()
  @IsBoolean()
  isRemoteOpening?: boolean;

  @IsOptional()
  @IsInt()
  score?: number;

  @IsDefined()
  bank!: bank;

  @IsDefined()
  country!: country;
}
