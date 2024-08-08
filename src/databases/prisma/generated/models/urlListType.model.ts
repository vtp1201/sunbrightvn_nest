import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { urlList } from './';

export class urlListType {
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
  urlLists!: urlList[];
}
