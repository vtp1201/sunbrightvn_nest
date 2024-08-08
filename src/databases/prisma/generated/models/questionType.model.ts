import { IsDefined, IsInt, IsString } from 'class-validator';

import { question } from './';

export class questionType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  questions!: question[];
}
