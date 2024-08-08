import { IsDefined, IsInt } from 'class-validator';

import './';

export class fileTemplateHasRankingPartnerType {
  @IsDefined()
  @IsInt()
  fileTemplateId!: number;

  @IsDefined()
  @IsInt()
  rankingPartnerTypeId!: number;
}
