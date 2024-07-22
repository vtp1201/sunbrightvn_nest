import { Controller, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.CONTACT_FORM;
@Controller()
@ApiTags(TAG)
export class ContactFormController {
  constructor() {}

  @Post(ROUTE.BASE)
  contact() {
    return '';
  }

  @Post(ROUTE.CHECK_NAME)
  checkName() {
    return '';
  }

  @Post(ROUTE.QUESTION)
  subscribe() {
    return '';
  }

  @Post(ROUTE.PARTNER)
  partner() {
    return '';
  }

  @Post(ROUTE.ADVISORY)
  advisory() {
    return '';
  }

  @Post(ROUTE.PROFILE_REQUEST)
  profileRequest() {
    return '';
  }

  @Post(ROUTE.TAWKTO)
  @Post(ROUTE.TAWKTO_API)
  addContactFormQueueFn() {
    return '';
  }

  @Post(ROUTE.MINITOOL_CONTACT)
  miniToolContact() {
    return '';
  }

  @Post(ROUTE.ES_TOOL)
  esTool() {
    return '';
  }

  @Post(ROUTE.ES_TOOL_CATEGORY)
  esToolCategory() {
    return '';
  }

  @Post(ROUTE.HK_COST_TOOL)
  @Post(ROUTE.TAX_TOOL)
  hkCostTool() {
    return '';
  }

  @Post(ROUTE.DEFAULT)
  contactFormDefault() {
    return '';
  }

  @Post(ROUTE.MINITOOL_COMPLIANCE)
  minitoolCompliance() {
    return '';
  }

  @Post(ROUTE.EBOOK)
  contactEbook() {
    return '';
  }

  @Post(ROUTE.WHITEPAPER)
  whitepaperB2B() {
    return '';
  }

  @Post(ROUTE.US_BUSINESS_ENTITY_TOOL)
  usBusinessEntityTool() {
    return '';
  }

  @Post(ROUTE.RECRUITMENT)
  recruitment() {
    return '';
  }

  @Post(ROUTE.ECOMMERCE_GUIDE)
  ecommerceGuide() {
    return '';
  }

  @Post(ROUTE.TRADING_GUIDE)
  tradingGuide() {
    return '';
  }

  @Put(ROUTE.UPDATE_CUSTOMER)
  updateCustomer() {
    return '';
  }

  @Post(ROUTE.OP_TIN_MONSTER_EBOOK)
  opTinMonsterEbook() {
    return '';
  }

  @Post(ROUTE.MINITOOL_COMPLIANCE_MESSAGE)
  miniToolComplianceMessage() {
    return '';
  }

  @Post(ROUTE.CORPSEC_SG_PACKAGE)
  corpsecSGPackageMessage() {
    return '';
  }
}
