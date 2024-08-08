import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { businessActivityIndustry } from './';

export class businessActivityIndustryClass {
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
  businessActivityIndustries!: businessActivityIndustry[];
}
