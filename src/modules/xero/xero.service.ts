import { BadRequestException, Injectable } from '@nestjs/common';

import { BillingService } from '@modules/billing/billing.service';
import { CompanyService } from '@modules/company/company.service';
import { CustomerService } from '@modules/customer/customer.service';
import * as moment from 'moment';
import { Invoice, Phone, XeroClient } from 'xero-node';

import { createInvoiceInput, CreateNewContactXeroInPortalInput, WebsiteFullRelation } from '@types';

import { exchange, XERO_ACCOUNT_CODE_DEFAULT, XERO_SCOPE, XERO_TAX_TYPE_DEFAULT } from '@utilities';

@Injectable()
export class XeroService {
  activeTenantId: string;
  xeroClient: XeroClient;
  constructor(
    private website: WebsiteFullRelation,
    private companyService: CompanyService,
    private customerService: CustomerService,
    private billingService: BillingService,
  ) {
    this.activeTenantId = website.xeroTenantId;
    this.xeroClient = new XeroClient({
      clientId: website.xeroClientId,
      clientSecret: website.xeroClientSecret,
      redirectUris: [website.xeroRedirectUrl],
      scopes: XERO_SCOPE,
    });
  }

  async createInvoice({ orderId, orderItems, xeroContactId }: createInvoiceInput) {
    const lineItems: {
      taxType: string;
      accountCode: string;
      description?: string;
      itemCode?: string;
      unitAmount?: number;
      lineAmount?: number;
      quantity: number;
    }[] = [];
    orderItems.forEach((orderItem) => {
      const item = {
        taxType: XERO_TAX_TYPE_DEFAULT,
        accountCode: orderItem.service?.xeroAccount?.code ?? XERO_ACCOUNT_CODE_DEFAULT,
        description: orderItem.description ?? null,
        quantity: orderItem.quantity,
      };

      if (orderItem.service && orderItem.amount > 0) {
        lineItems.push({
          ...item,
          itemCode: orderItem.service.xeroItemCode,
        });
        return;
      }

      if (orderItem.package && orderItem.amount > 0) {
        lineItems.push({
          ...item,
          itemCode: orderItem.package.xeroItemCode,
        });
        return;
      }

      const unitAmount = exchange(
        orderItem.unitPrice,
        this.website.currency.exchangeRate,
        this.website.minUnit,
        this.website.minAmount,
      );
      lineItems.push({
        ...item,
        description: orderItem.service
          ? orderItem.service.name
          : orderItem.description
            ? orderItem.description
            : 'Unknown service',
        unitAmount,
        lineAmount: unitAmount * orderItem.quantity,
      });
      return;
    });

    const invoices = {
      invoices: [
        {
          type: Invoice.TypeEnum.ACCREC,
          contact: { contactID: xeroContactId },
          lineItems: lineItems,
          date: moment().format('YYYY-MM-DD'),
          dueDate: moment().format('YYYY-MM-DD'),
          reference: orderId.toString(),
          status: Invoice.StatusEnum.DRAFT,
        },
      ],
    };
    // {Boolean} If false return 200 OK and mix of successfully created objects and any with validation errors
    const summarizeErrors = true;
    // {Integer} e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
    const unitdp = 4;
    const createdInvoice = await this.xeroClient.accountingApi.createInvoices(
      this.activeTenantId,
      invoices,
      summarizeErrors,
      unitdp,
    );

    const invoice = createdInvoice.body.invoices[0];
    if (!invoice) {
      throw new BadRequestException('');
    }
    return {
      xeroInvoiceId: invoice.invoiceID,
      xeroInvoiceNumber: invoice.invoiceNumber,
    };
  }

  async createNewContactXeroInPortal(order: CreateNewContactXeroInPortalInput) {
    await this.xeroClient.refreshToken();
    const infoBeforeCreate = this.getInfoPrepareToCreateXero(order);
    const listContacts = await this.getContactXeroByCompanyName(infoBeforeCreate.contactName);
    // logger.info('===== contact xero: ' + listContacts);
    if (listContacts && listContacts.contacts.length > 0) {
      const suffix = new Date().getTime().toString();
      infoBeforeCreate.contactName = `${infoBeforeCreate.contactName}-${suffix}`;
      infoBeforeCreate.accountNumber = `${infoBeforeCreate.accountNumber}-${suffix}`;
    }
    if (!infoBeforeCreate.contactName || !infoBeforeCreate.accountNumber) {
      return null;
    }
    const contacts = {
      contacts: [
        {
          name: `${infoBeforeCreate.contactName}`,
          emailAddress: order.customer.email,
          firstName: `${infoBeforeCreate.firstName}`.trim(),
          lastName: `${infoBeforeCreate.lastName}`.trim(),
          phones: [
            {
              phoneType: Phone.PhoneTypeEnum.DEFAULT,
              phoneNumber: infoBeforeCreate.phone,
              phoneAreaCode: '',
            },
          ],
          accountNumber: infoBeforeCreate.accountNumber,
        },
      ],
    };
    const summarizeErrors = true;
    const response = await this.xeroClient.accountingApi.createContacts(
      this.activeTenantId,
      contacts,
      summarizeErrors,
    );
    // logger.info('===== contact xero: ' + response?.body?.contacts[0]);
    const xeroContactId = response.body.contacts[0].contactID;
    const arrPromise = [];
    if (order.billing) {
      arrPromise.push(
        this.billingService.updateXeroContact({
          id: order.billing.id,
          xeroContactId,
        }),
      );
    }
    if (order.company) {
      arrPromise.push(
        this.companyService.updateXeroContact({
          id: order.billing.id,
          xeroContactId,
        }),
      );
    }
    arrPromise.push(
      this.customerService.updateXeroContact({
        id: order.billing.id,
        xeroContactId,
      }),
    );
    await Promise.all(arrPromise);
    return xeroContactId;
  }

  getInfoPrepareToCreateXero(order: CreateNewContactXeroInPortalInput) {
    const data: {
      companyCode?: string;
      accountNumber?: string;
      contactName?: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
    } = {};
    if (order.billing && (order.billing.firstName || order.billing.lastName)) {
      data.firstName = order.billing.firstName;
      data.lastName = order.billing.lastName;
      data.phone = order.billing.phone;
      data.contactName = order.billing.name.trim();
    } else if (order.customer) {
      data.firstName = order.customer.firstName;
      data.lastName = order.customer.lastName;
      data.phone = order.customer.phone;
      data.contactName =
        `${data.firstName ? data.firstName.trim() : ''}${data.lastName ? ' ' + data.lastName.trim() : ''}`.trim();
    }
    if (order.company && order.company.companyCode) {
      data.companyCode = `-${order.company.companyCode}`;
      data.contactName = `${data.contactName}${data.companyCode}`;
      data.accountNumber = order.company.companyCode;
    }

    return data;
  }

  private async getContactXeroByCompanyName(accountName: string) {
    const where = `Name=="${accountName.trim()}"`;
    const response = await this.xeroClient.accountingApi.getContacts(
      this.activeTenantId,
      null,
      where,
    );
    return response.body;
  }
}
