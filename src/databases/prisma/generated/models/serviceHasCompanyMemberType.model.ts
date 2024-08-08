import { IsDefined, IsInt } from 'class-validator';

import './';

export class serviceHasCompanyMemberType {
  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsDefined()
  @IsInt()
  companyMemberTypeId!: number;
}
