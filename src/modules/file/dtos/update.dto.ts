import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFileDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
