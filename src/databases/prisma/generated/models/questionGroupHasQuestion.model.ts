import { IsDefined, IsInt } from 'class-validator';

import './';

export class questionGroupHasQuestion {
  @IsDefined()
  @IsInt()
  questionGroupId!: number;

  @IsDefined()
  @IsInt()
  questionId!: number;
}
