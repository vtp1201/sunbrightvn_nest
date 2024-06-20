import { IsNotEmpty } from 'class-validator';

export class ConfigEnvDto {
  @IsNotEmpty()
  readonly MYSQL_USERNAME: string;

  @IsNotEmpty()
  readonly MYSQL_PASSWORD: string;

  @IsNotEmpty()
  readonly MYSQL_DATABASE: string;

  @IsNotEmpty()
  readonly MYSQL_HOST: string;
  @IsNotEmpty()
  readonly MYSQL_PORT: string;

  @IsNotEmpty()
  readonly MYSQL_URL: string;

  @IsNotEmpty()
  readonly MAILCHIMP_API_KEY: string;

  @IsNotEmpty()
  readonly MAILCHIMP_AUDIENCE_ID: string;

  @IsNotEmpty()
  readonly MAILCHIMP_URI: string;

  @IsNotEmpty()
  readonly MAILCHIMP_USERNAME: string;
}
