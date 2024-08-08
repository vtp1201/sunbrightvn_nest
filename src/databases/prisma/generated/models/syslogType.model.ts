import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { syslog } from './';

export class syslogType {
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
  syslogs!: syslog[];
}
