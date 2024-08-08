import { IsBoolean, IsDefined, IsInt } from 'class-validator';

import { country, entityType, fileTemplate } from './';

export class countryHasEntityType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsInt()
  entityTypeId!: number;

  @IsDefined()
  @IsBoolean()
  isActive!: boolean;

  @IsDefined()
  country!: country;

  @IsDefined()
  entityType!: entityType;

  @IsDefined()
  fileTemplates!: fileTemplate[];
}
