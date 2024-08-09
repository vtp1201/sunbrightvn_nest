import { OmitType, PartialType } from '@nestjs/swagger';

import { notification } from '@databases/prisma/generated/models';

import { E_OMIT_DEFAULT } from '@utilities';

export class CreateNotificationDto extends OmitType(notification, [
  E_OMIT_DEFAULT.id,
  E_OMIT_DEFAULT.createdTime,
  E_OMIT_DEFAULT.deletedTime,
]) {}

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
