import { IsOptional, IsString } from 'class-validator';

export class CreateFileRelationDTO {
  @IsString()
  name: string;

  @IsString()
  s3Path: string;

  @IsOptional()
  @IsString()
  mimeType?: string;
}

export class CreateFileDTO extends CreateFileRelationDTO {}
