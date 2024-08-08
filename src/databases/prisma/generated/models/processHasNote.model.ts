import { IsDefined, IsInt } from 'class-validator';

import './';

export class processHasNote {
  @IsDefined()
  @IsInt()
  processId!: number;

  @IsDefined()
  @IsInt()
  noteId!: number;
}
