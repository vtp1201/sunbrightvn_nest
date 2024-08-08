import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { surveyChoice } from './';

export class survey {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  surveyChoices!: surveyChoice[];
}
