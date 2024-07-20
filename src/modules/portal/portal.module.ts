import { Module } from '@nestjs/common';

import {
  Christmas2022Controller,
  ContactFormController,
  EnumController,
  MailchimpController,
  NotificationFormController,
  OrderController,
  PaymentController,
  RateController,
  SSICSingaporeController,
  SicUKController,
  SingaporeACRAController,
  SingaporeGrantSchemeController,
  StaticDataController,
  SurveyController,
  TrustpilotController,
  USBusinessEntityController,
  UploadController,
} from './controller';

@Module({
  imports: [],
  controllers: [
    Christmas2022Controller,
    ContactFormController,
    EnumController,
    MailchimpController,
    NotificationFormController,
    OrderController,
    PaymentController,
    RateController,
    SSICSingaporeController,
    SicUKController,
    SingaporeACRAController,
    SingaporeGrantSchemeController,
    StaticDataController,
    SurveyController,
    TrustpilotController,
    USBusinessEntityController,
    UploadController,
  ],
})
export class PortalModule {}
