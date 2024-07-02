import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanySuffix';
import { deleted, oneToMany } from '../mixins';
import {
  company,
  country,
  customer,
  entityType,
  historyCompany,
  proposedName,
  service,
} from '.';

export default createModel(MODEL_NAME.COMPANY_SUFFIX, (CompanySuffixModel) => {
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

  // defined relations
  const companiesRelation = oneToMany({
    model: company,
    relation: RELATION.companies,
  });
  const countriesRelation = oneToMany({
    model: country,
    relation: RELATION.countries,
  });
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const entityTypesRelation = oneToMany({
    model: entityType,
    relation: RELATION.entityTypes,
  });
  const historyCompaniesRelation = oneToMany({
    model: historyCompany,
    relation: RELATION.historyCompanies,
  });
  const proposedNamesRelation = oneToMany({
    model: proposedName,
    relation: RELATION.proposedNames,
  });
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });

  // defined Model
  process.nextTick(() => {
    CompanySuffixModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .boolean(ATTRIBUTE.isPrefix, {
        map: COLUMN.isPrefix,
        default: false,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(companiesRelation)
      .mixin(countriesRelation)
      .mixin(customersRelation)
      .mixin(entityTypesRelation)
      .mixin(historyCompaniesRelation)
      .mixin(proposedNamesRelation)
      .mixin(servicesRelation)

      // table name
      .map(TABLE_NAME.COMPANY_SUFFIX);
  });
});
