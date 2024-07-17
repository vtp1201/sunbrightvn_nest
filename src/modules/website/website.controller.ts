import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AbstractController } from '@abstracts';
import { API_TAGS, MODEL_NAME, ROUTES } from '@utilities';

import { WebsiteRepository } from './website.repository';
import { WebsiteService } from './website.service';

@Controller()
@ApiTags(API_TAGS.WEBSITE)
export class WebsiteController extends AbstractController<
  MODEL_NAME.WEBSITE,
  WebsiteRepository,
  WebsiteService
> {
  constructor(service: WebsiteService) {
    super(service);
  }

  @Get(ROUTES.WEBSITE.GET_ENUM)
  findAll() {
    return this.service.findMany();
  }

  @Get(ROUTES.WEBSITE.ID)
  findOne() {
    return '';
  }

  @Put(ROUTES.WEBSITE.ID)
  update() {
    return '';
  }
}
