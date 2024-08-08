import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { agent } from './';

export class agentType {
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
  agents!: agent[];
}
