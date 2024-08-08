import { IsDefined, IsInt } from 'class-validator';

import './';

export class countryHasQuestion {
  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsInt()
  questionId!: number;
}
