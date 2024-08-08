import { IsDefined, IsInt, IsString } from 'class-validator';

import './';

export class singaporeAcra {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  entityName!: string;
}
