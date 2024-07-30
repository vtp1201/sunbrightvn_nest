import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Response } from 'express';

import { CONFIGURATION, E_NODE_ENV } from '@utilities';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly configService: ConfigService) {}
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception instanceof HttpException ? exception.getStatus() : 500;

    const message =
      exception instanceof HttpException ? exception.message : 'Internal server error';
    console.log(exception);
    response.status(status).json({
      statusCode: status,
      message,
      error:
        this.configService.get(CONFIGURATION.NODE_ENV) !== E_NODE_ENV.PRODUCTION
          ? {
              response: exception.response,
              stack: exception.stack,
            }
          : null,
    });
  }
}
