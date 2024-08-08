import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { customerHasSurveyChoice, survey } from './';

export class surveyChoice {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  surveyId!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsBoolean()
  isContent!: boolean;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  customerHasSurveyChoices!: customerHasSurveyChoice[];

  @IsDefined()
  survey!: survey;
}
