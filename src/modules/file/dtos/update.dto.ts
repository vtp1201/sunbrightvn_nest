import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFileDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
