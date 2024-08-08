import { IsDefined, IsInt, IsOptional } from 'class-validator';

import { Prisma } from '@prisma/client';

import { fileTemplate, service } from './';

export class serviceHasFileTemplate {
  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsDefined()
  @IsInt()
  fileTemplateId!: number;

  @IsOptional()
  typeConfigs?: Prisma.JsonValue;

  @IsDefined()
  service!: service;

  @IsDefined()
  fileTemplate!: fileTemplate;
}
