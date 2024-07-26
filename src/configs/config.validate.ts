import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { ConfigEnvDTO } from './config.dto';

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(ConfigEnvDTO, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
