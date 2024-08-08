import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { changeRequest, serviceChangeOfficer } from './';

export class changeRequestStatus {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

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
  changeRequests!: changeRequest[];

  @IsDefined()
  serviceChangeOfficers!: serviceChangeOfficer[];
}
