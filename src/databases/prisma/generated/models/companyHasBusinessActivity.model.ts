import { IsDefined, IsInt } from 'class-validator';

import './';

export class companyHasBusinessActivity {
  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  businessActivityId!: number;
}
