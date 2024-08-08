import { IsDefined, IsInt } from 'class-validator';

import './';

export class serviceHasCompanySuffix {
  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsDefined()
  @IsInt()
  companySuffixId!: number;
}
