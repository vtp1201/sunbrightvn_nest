import { IsDefined, IsInt } from 'class-validator';

import './';

export class companyMemberOperationCountry {
  @IsDefined()
  @IsInt()
  companyMemberId!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;
}
