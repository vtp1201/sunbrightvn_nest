import { OmitType, PartialType } from '@nestjs/swagger';

import { IsInt } from 'class-validator';

import { company } from '@databases/prisma/generated/models';

import { OMIT_DEFAULT } from '@utilities';

export class CreateCompanyDto extends OmitType(company, OMIT_DEFAULT) {}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsInt()
  id: number;
}
