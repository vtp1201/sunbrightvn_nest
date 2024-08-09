import { OmitType, PartialType } from '@nestjs/swagger';

import { role } from '@databases/prisma/generated/models';

import { OMIT_DEFAULT } from '@utilities';

export class CreateRoleDto extends OmitType(role, OMIT_DEFAULT) {}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
