import { IsBoolean, IsDefined, IsInt } from 'class-validator';

import { department, serviceType } from './';

export class serviceTypeHasDepartment {
  @IsDefined()
  @IsInt()
  serviceTypeId!: number;

  @IsDefined()
  @IsInt()
  departmentId!: number;

  @IsDefined()
  @IsBoolean()
  isMain!: boolean;

  @IsDefined()
  serviceType!: serviceType;

  @IsDefined()
  department!: department;
}
