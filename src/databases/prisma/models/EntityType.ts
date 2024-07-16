import { createModel } from 'schemix';

import {
  Package,
  company,
  companySuffix,
  countryHasEntityType,
  countryHasService,
  customer,
  historyCompany,
  task,
  toolBusinessEntity,
} from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/EntityType';

export default createModel(MODEL_NAME.ENTITY_TYPE, (EntityTypeModel) => {
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
  const countryHasEntityTypesRelation = oneToMany({
    model: countryHasEntityType,
    relation: RELATION.countryHasEntityTypes,
  });
  const countryHasServicesRelation = oneToMany({
    model: countryHasService,
    relation: RELATION.countryHasServices,
  });
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const companySuffixesRelation = oneToMany({
    model: companySuffix,
    relation: RELATION.companySuffixes,
  });
  const historyCompaniesRelation = oneToMany({
    model: historyCompany,
    relation: RELATION.historyCompanies,
  });
  const packagesRelation = oneToMany({
    model: Package,
    relation: RELATION.packages,
  });
  const toolBusinessEntitiesRelation = oneToMany({
    model: toolBusinessEntity,
    relation: RELATION.toolBusinessEntities,
  });
  const tasksRelation = oneToMany({
    model: task,
    relation: RELATION.tasks,
  });

  // defined Model
  process.nextTick(() => {
    EntityTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.guid, {
        map: COLUMN.guid,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.country, {
        map: COLUMN.country,
        optional: true,
        raw: RAW_STRING.TEXT,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(companiesRelation)
      .mixin(countryHasEntityTypesRelation)
      .mixin(countryHasServicesRelation)
      .mixin(customersRelation)
      .mixin(companySuffixesRelation)
      .mixin(historyCompaniesRelation)
      .mixin(packagesRelation)
      .mixin(toolBusinessEntitiesRelation)
      .mixin(tasksRelation)

      // table name
      .map(TABLE_NAME.ENTITY_TYPE);
  });
});
