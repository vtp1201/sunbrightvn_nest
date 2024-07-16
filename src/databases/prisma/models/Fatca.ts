import { createModel } from 'schemix';

import { companyMember, country, customer, declarationTax, task } from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Fatca';

export default createModel(MODEL_NAME.FATCA, (FatcaModel) => {
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Relations
  const declarationTaxesRelation = oneToMany({
    model: declarationTax,
    relation: RELATION.declarationTaxes,
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    option: { optional: true },
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
    option: { optional: true },
  });
  const holderCountryRelation = oneToOne({
    attribute: ATTRIBUTE.holderCountryId,
    model: country,
    relation: RELATION.holderCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const mailingCountryRelation = oneToOne({
    attribute: ATTRIBUTE.mailingCountryId,
    model: country,
    relation: RELATION.mailingCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const residentCountryRelation = oneToOne({
    attribute: ATTRIBUTE.residentCountryId,
    model: country,
    relation: RELATION.residentCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
  });

  // defined Model
  process.nextTick(() => {
    FatcaModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
        optional: true,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
      })
      .string(ATTRIBUTE.holderName, {
        map: COLUMN.holderName,
        raw: RAW_STRING.LENGTH_255,
      })
      .dateTime(ATTRIBUTE.holderBirthday, {
        map: COLUMN.holderBirthday,
        raw: RAW_DATE_TIME.DATE_ONLY,
      })
      .int(ATTRIBUTE.holderCountryId, {
        map: COLUMN.holderCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.residentAddress, {
        map: COLUMN.residentAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.residentCountryId, {
        map: COLUMN.residentCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.residentCity, {
        map: COLUMN.residentCity,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.residentState, {
        map: COLUMN.residentState,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.residentPostalCode, {
        map: COLUMN.residentPostalCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.mailingAddress, {
        map: COLUMN.mailingAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.mailingCountryId, {
        map: COLUMN.mailingCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.mailingCity, {
        map: COLUMN.mailingCity,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.mailingState, {
        map: COLUMN.mailingState,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.mailingPostalCode, {
        map: COLUMN.mailingPostalCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.optionDeclarationUSPerson, {
        map: COLUMN.optionDeclarationUSPerson,
        optional: true,
      })
      .string(ATTRIBUTE.taxpayerIdNumber, {
        map: COLUMN.taxpayerIdNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(declarationTaxesRelation)
      .mixin(companyMemberRelation)
      .mixin(customerRelation)
      .mixin(holderCountryRelation)
      .mixin(mailingCountryRelation)
      .mixin(residentCountryRelation)
      .mixin(taskRelation)

      // indexes
      // .raw(INDEX.companyMemberId)
      // .raw(INDEX.customerId)
      // .raw(INDEX.holderCountryId)
      // .raw(INDEX.mailingCountryId)
      // .raw(INDEX.residentCountryId)
      // .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.FATCA);
  });
});
