import { OmitType, PartialType } from '@nestjs/swagger';

import { answer } from '@databases/prisma/generated/models';

import { OMIT_DEFAULT } from '@utilities';

export class CreateAnswerDto extends OmitType(answer, OMIT_DEFAULT) {}

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {}
