import { CONFIGURATION } from '@utilities';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class ConfigEnvDto {
  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.NODE_ENV]: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly [CONFIGURATION.PORT]: number;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MYSQL_USERNAME]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MYSQL_PASSWORD]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MYSQL_DATABASE]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MYSQL_HOST]: string;

  @IsNotEmpty()
  @IsNumber()
  readonly [CONFIGURATION.MYSQL_PORT]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MYSQL_URL]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MAILCHIMP_API_KEY]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MAILCHIMP_AUDIENCE_ID]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MAILCHIMP_URI]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.MAILCHIMP_USERNAME]: string;

  @IsNotEmpty()
  @IsNumber()
  readonly [CONFIGURATION.JWT_ACCESS_TOKEN_SECRET_KEY]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.JWT_TOKEN_PUBLIC_SECRET_KEY]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.JWT_REFRESH_TOKEN_SECRET_KEY]: string;

  @IsNotEmpty()
  @IsNumberString()
  readonly [CONFIGURATION.JWT_ACCESS_TOKEN_TIME_TO_LIVE]: number;

  @IsNotEmpty()
  @IsNumberString()
  readonly [CONFIGURATION.JWT_REFRESH_TOKEN_TIME_TO_LIVE]: number;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.TWO_FACTOR_AUTH_SECRET_KEY]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.PASSWORD_SALT_STATIC]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.WEBSOCKET_URL]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.GOOGLE_CLIENT_ID]: string;

  @IsNumberString()
  @IsNotEmpty()
  readonly [CONFIGURATION.ASSETS_EXPIRES]: string;

  @IsString()
  @IsNotEmpty()
  readonly [CONFIGURATION.GOOGLE_CALENDAR_KEY]: string;

  @IsNumberString()
  @IsNotEmpty()
  readonly [CONFIGURATION.REDIS_TIME_LIFE_CACHING]: string;

  @IsNumberString()
  @IsNotEmpty()
  readonly [CONFIGURATION.REDIS_TIME_LIFE_CATCHING_RESEND_2FA]: string;
}
