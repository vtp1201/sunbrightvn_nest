import { ApiProperty } from '@nestjs/swagger';

import { IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class FilterDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 45)
  searchString?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  countryId?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 45)
  country?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  limit?: number;
}
