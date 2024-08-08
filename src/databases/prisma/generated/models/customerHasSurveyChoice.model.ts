import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { customer, surveyChoice } from './';

export class customerHasSurveyChoice {
  @IsDefined()
  @IsInt()
  customerId!: number;

  @IsDefined()
  @IsInt()
  surveyChoiceId!: number;

  @IsOptional()
  @IsString()
  surveyContent?: string;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  customer!: customer;

  @IsDefined()
  surveyChoice!: surveyChoice;
}
