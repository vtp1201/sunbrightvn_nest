import { OmitType, PartialType } from '@nestjs/swagger';

import { billing } from '@databases/prisma/generated/models';

import { OMIT_DEFAULT } from '@utilities';

export class CreateBillingDto extends OmitType(billing, OMIT_DEFAULT) {}

export class UpdateBillingDto extends PartialType(CreateBillingDto) {}
