import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WebsiteService } from './website.service';
import { AbstractController } from '@abstracts';
import { MODEL_NAME } from '@utilities/constants';
import { WebsiteRepository } from './website.repository';

@Controller('user-roles')
@ApiTags('user-roles')
export class WebsiteController extends AbstractController<
  MODEL_NAME.WEBSITE,
  WebsiteRepository,
  WebsiteService
> {
  constructor(service: WebsiteService) {
    super(service);
  }

  @Post()
  create() {
    return '';
  }

  @Get()
  findAll() {
    return '';
  }

  @Get(':id')
  findOne() {
    return '';
  }

  @Patch(':id')
  update() {
    return '';
  }

  @Delete(':id')
  remove() {
    return '';
  }
}
