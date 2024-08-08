import { IsBoolean, IsDate, IsDefined, IsInt } from 'class-validator';

import { Package, service } from './';

export class packageHasService {
  @IsDefined()
  @IsInt()
  packageId!: number;

  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsDefined()
  @IsInt()
  typeId!: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  package!: Package;

  @IsDefined()
  service!: service;
}
