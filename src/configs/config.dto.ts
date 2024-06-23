import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ConfigEnvDto {
  @IsNotEmpty()
  @IsString()
  readonly MYSQL_USERNAME: string;

  @IsString()
  @IsNotEmpty()
  readonly MYSQL_PASSWORD: string;

  @IsString()
  @IsNotEmpty()
  readonly MYSQL_DATABASE: string;

  @IsString()
  @IsNotEmpty()
  readonly MYSQL_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  readonly MYSQL_PORT: string;

  @IsString()
  @IsNotEmpty()
  readonly MYSQL_URL: string;

  @IsString()
  @IsNotEmpty()
  readonly MAILCHIMP_API_KEY: string;

  @IsString()
  @IsNotEmpty()
  readonly MAILCHIMP_AUDIENCE_ID: string;

  @IsNotEmpty()
  @IsString()
  readonly MAILCHIMP_URI: string;

  @IsString()
  @IsNotEmpty()
  readonly MAILCHIMP_USERNAME: string;
}
