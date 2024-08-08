import { Injectable } from '@nestjs/common';

import { XeroClient } from 'xero-node';

import { Order, UpdateAfterPaymentOutput, Website } from '@types';

import { XERO_SCOPE } from '@utilities';

@Injectable()
export class XeroService extends XeroClient {
  constructor(website: Website) {
    super({
      clientId: website.xeroClientId,
      clientSecret: website.xeroClientSecret,
      redirectUris: [website.xeroRedirectUrl],
      scopes: XERO_SCOPE,
    });
  }

  async createNewContactXeroInPortal(order: UpdateAfterPaymentOutput) {
    await this.refreshToken();
    let company_code = '';
    let accountNumber;
    let contactName;
    let first_name;
    let last_name;
    let phone;
    const arrPromise = [];
    if (order.billing && (order.billing.first_name || order.billing.last_name)) {
      first_name = order.billing.first_name;
      last_name = order.billing.last_name;
      phone = order.billing.phone;
      contactName = order.billing.name.trim();
    } else if (order.Customer) {
      first_name = order.Customer.first_name;
      last_name = order.Customer.last_name;
      phone = order.Customer.phone;
      contactName =
        `${first_name ? first_name.trim() : ''}${last_name ? ' ' + last_name.trim() : ''}`.trim();
    }
    if (order.Company && order.Company.company_code) {
      company_code = `-${order.Company.company_code}`;
      contactName = `${contactName}${company_code}`;
      accountNumber = order.Company.company_code;
    }
    const activeTenantId = await this.xeroTenantId(order.website_id);
    const listContacts = await this.getContactXeroByCompanyName(
      activeTenantId,
      contactName,
      order.website_id,
    );
    logger.info('===== contact xero: ' + listContacts);
    if (listContacts && listContacts.contacts.length > 0) {
      const suffix = new Date().getTime().toString();
      contactName = `${contactName}-${suffix}`;
      accountNumber = `${accountNumber}-${suffix}`;
    }
    if (contactName && accountNumber) {
      const contacts = {
        contacts: [
          {
            name: `${contactName}`,
            emailAddress: order.Customer.email,
            firstName: `${first_name}`.trim(),
            lastName: `${last_name}`.trim(),
            phones: [
              {
                phoneType: this.Phone.PhoneTypeEnum.DEFAULT,
                phoneNumber: phone,
                phoneAreaCode: '',
              },
            ],
            accountNumber: accountNumber,
          },
        ],
      };
      const summarizeErrors = true;
      const response = await this.xero_bbcincorp[order.website_id].accountingApi.createContacts(
        activeTenantId,
        contacts,
        summarizeErrors,
      );
      // logger.info('===== contact xero: ' + response?.body?.contacts[0]);
      if (order.billing) {
        const promisebilling = Models.billing.update(
          { xero_contact_id: response.body.contacts[0].contactID },
          { where: { id: order.billing.id } },
        );
        arrPromise.push(promisebilling);
      }
      if (order.Company) {
        const promiseCompany = Models.Company.update(
          { xero_contact_id: response.body.contacts[0].contactID },
          { where: { id: order.Company.id } },
        );
        arrPromise.push(promiseCompany);
      }
      const promiseCustomer = Models.Customer.update(
        { xero_contact_id: response.body.contacts[0].contactID },
        { where: { id: order.Customer.id } },
      );
      arrPromise.push(promiseCustomer);
      await Promise.all(arrPromise);
      //console.log(response.body.contacts[0].contactID);
      return response.body.contacts[0].contactID;
    }
    return null;
  }
}
