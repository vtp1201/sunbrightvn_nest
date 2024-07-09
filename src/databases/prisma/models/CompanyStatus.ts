import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanyStatus';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { company, historyCompany } from '.';

export default createModel(MODEL_NAME.COMPANY_STATUS, (CompanyStatusModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
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
  const historyCompaniesRelation = oneToMany({
    model: historyCompany,
    relation: RELATION.historyCompanies,
  });

  // defined Model
  process.nextTick(() => {
    CompanyStatusModel.int(ATTRIBUTE.id, {
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

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companiesRelation)
      .mixin(historyCompaniesRelation)

      // table name
      .map(TABLE_NAME.COMPANY_STATUS);
  });
});
