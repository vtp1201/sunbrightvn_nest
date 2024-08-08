import { IsDefined, IsInt } from 'class-validator';

import './';

export class notificationTemplateHasRole {
  @IsDefined()
  @IsInt()
  roleId!: number;

  @IsDefined()
  @IsInt()
  notificationTemplateId!: number;
}
