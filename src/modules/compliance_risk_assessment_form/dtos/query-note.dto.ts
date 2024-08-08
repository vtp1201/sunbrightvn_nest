import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min, ValidateIf } from 'class-validator';

export class QueryNoteDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  taskId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  processId: number;

  @IsOptional()
  @ValidateIf((o) => o.companyId !== '' && o.companyId !== null)
  @IsInt()
  @Min(1)
  @Type(() => Number)
  companyId?: number | null;
}
