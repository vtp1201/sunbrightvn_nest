import { OmitType, PartialType } from '@nestjs/swagger';

import { notificationTemplate } from '@databases/prisma/generated/models';

import { OMIT_DEFAULT } from '@utilities';

export class CreateNotificationTemplateDto extends OmitType(notificationTemplate, OMIT_DEFAULT) {}

export class UpdateNotificationTemplateDto extends PartialType(CreateNotificationTemplateDto) {}
