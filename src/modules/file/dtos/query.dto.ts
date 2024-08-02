import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min, ValidateIf } from 'class-validator';

export class QueryFileDTO {
  @IsOptional()
  @IsInt()
  @Min(1)
  typeMemberId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  companyMemberTypeId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  taskId?: number;

  @IsInt()
  @Min(1)
  processId: number;

  @IsOptional()
  @ValidateIf((o) => o.companyId !== '' && o.companyId !== null)
  @IsInt()
  @Min(1)
  @Type(() => Number) // Transform the value to a number if it's not null or empty string
  companyId?: number | null;
}
