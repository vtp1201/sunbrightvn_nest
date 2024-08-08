import { IsBoolean, IsDate, IsDefined, IsInt } from 'class-validator';

import { file, historyLogCdc } from './';

export class historyFile {
  @IsDefined()
  @IsInt()
  fileId!: number;

  @IsDefined()
  @IsInt()
  historyLogCdcId!: number;

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
  file!: file;

  @IsDefined()
  historyLogCDC!: historyLogCdc;
}
