import { CONFIGURATION } from '@utilities';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ConfigEnvDTO {
  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.NODE_ENV]: string;

  @IsNotEmpty()
  @IsNumber()
  readonly [CONFIGURATION.PORT]: number;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MYSQL_USERNAME]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MYSQL_PASSWORD]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MYSQL_DATABASE]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MYSQL_HOST]: string;

  @IsNotEmpty()
  @IsNumber()
  readonly [CONFIGURATION.MYSQL_PORT]: number;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MYSQL_URL]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MAILCHIMP_API_KEY]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MAILCHIMP_AUDIENCE_ID]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MAILCHIMP_URI]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.MAILCHIMP_USERNAME]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.JWT_ACCESS_TOKEN_SECRET_KEY]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.JWT_TOKEN_PUBLIC_SECRET_KEY]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.JWT_REFRESH_TOKEN_SECRET_KEY]: string;

  @IsNotEmpty()
  @IsNumber()
  readonly [CONFIGURATION.JWT_ACCESS_TOKEN_TIME_TO_LIVE]: number;

  @IsNotEmpty()
  @IsNumber()
  readonly [CONFIGURATION.JWT_REFRESH_TOKEN_TIME_TO_LIVE]: number;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.TWO_FACTOR_AUTH_SECRET_KEY]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.PASSWORD_SALT_STATIC]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.WEBSOCKET_URL]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.GOOGLE_CLIENT_ID]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.ASSETS_EXPIRES]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.GOOGLE_CALENDAR_KEY]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.REDIS_TIME_LIFE_CACHING]: string;

  @IsNotEmpty()
  @IsString()
  readonly [CONFIGURATION.REDIS_TIME_LIFE_CATCHING_RESEND_2FA]: string;
}
