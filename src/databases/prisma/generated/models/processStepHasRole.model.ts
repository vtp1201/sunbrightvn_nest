import { IsBoolean, IsDefined, IsInt } from 'class-validator';

import { processStep, role } from './';

export class processStepHasRole {
  @IsDefined()
  @IsInt()
  processStepId!: number;

  @IsDefined()
  @IsInt()
  roleId!: number;

  @IsDefined()
  @IsBoolean()
  isMain!: boolean;

  @IsDefined()
  processStep!: processStep;

  @IsDefined()
  role!: role;
}
