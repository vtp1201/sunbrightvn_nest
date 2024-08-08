import { IsDefined, IsInt } from 'class-validator';

import './';

export class companyMemberHasBusinessActivity {
  @IsDefined()
  @IsInt()
  companyMemberId!: number;

  @IsDefined()
  @IsInt()
  businessActivityId!: number;
}
