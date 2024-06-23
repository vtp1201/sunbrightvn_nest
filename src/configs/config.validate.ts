import { plainToInstance } from 'class-transformer';
import { ConfigEnvDto } from './config.dto';
import { validateSync } from 'class-validator';

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(ConfigEnvDto, config, {
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
