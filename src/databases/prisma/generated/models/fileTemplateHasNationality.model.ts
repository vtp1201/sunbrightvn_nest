import { IsBoolean, IsDate, IsDefined, IsInt } from 'class-validator';

import { country, fileTemplate } from './';

export class fileTemplateHasNationality {
  @IsDefined()
  @IsInt()
  fileTemplateId!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsBoolean()
  isFillMoreInformation!: boolean;

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
  country!: country;

  @IsDefined()
  fileTemplate!: fileTemplate;
}
