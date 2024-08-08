import { IsOptional, IsString } from 'class-validator';

export class CreateFileRelationDto {
  @IsString()
  name: string;

  @IsString()
  s3Path: string;

  @IsOptional()
  @IsString()
  mimeType?: string;
}

export class CreateFileDto extends CreateFileRelationDto {}
