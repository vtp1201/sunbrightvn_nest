import { Controller, Get, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AbstractController } from '@abstracts';

import { WebsiteRepository } from './website.repository';
import { WebsiteService } from './website.service';

import { MODEL_NAME, ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.WEBSITE;
@Controller()
@ApiTags(TAG)
export class WebsiteController extends AbstractController<
  MODEL_NAME.WEBSITE,
  WebsiteRepository,
  WebsiteService
> {
  constructor(service: WebsiteService) {
    super(service);
  }

  @Get(ROUTE.MAIL_VERIFY_URL__BY_ID)
  getMailVerifyUrl() {
    return '';
  }

  @Put(ROUTE.MAIL_TOKEN__BY_ID)
  setMailToken() {
    return '';
  }

  @Get(ROUTE.COMPANIES_HOUSE__AUTH)
  getURLOauth2() {
    return '';
  }
}
