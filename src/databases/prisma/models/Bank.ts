import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Bank';
import { deleted, oneToMany, oneToOne } from '../mixins';
import Country from './Country';
import BankBranch from './BankBranch';
import ActionProcessStep from './ActionProcessStep';
import Agent from './Agent';
import BankHasCountry from './BankHasCountry';
import FileTemplate from './FileTemplate';
import BankHasKeyword from './BankHasKeyword';
import BankingProcess from './BankingProcess';
import Customer from './Customer';
import Order from './Order';

export default createModel(MODEL_NAME.BANK, (BankModel) => {
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

  // defined Model
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: Country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const bankBranchesRelation = oneToMany({
    model: BankBranch,
    relation: RELATION.bankBranches,
  });
  const actionProcessStepsRelation = oneToMany({
    model: ActionProcessStep,
    relation: RELATION.actionProcessSteps,
  });
  const agentsRelation = oneToMany({
    model: Agent,
    relation: RELATION.agents,
  });
  const bankHasCountriesRelation = oneToMany({
    model: BankHasCountry,
    relation: RELATION.bankHasCountries,
  });
  const fileTemplatesRelation = oneToMany({
    model: FileTemplate,
    relation: RELATION.fileTemplates,
  });
  const bankHasKeywordsRelation = oneToMany({
    model: BankHasKeyword,
    relation: RELATION.bankHasKeywords,
  });
  const bankingProcessesRelation = oneToMany({
    model: BankingProcess,
    relation: RELATION.bankingProcesses,
  });
  const customersRelation = oneToMany({
    model: Customer,
    relation: RELATION.customers,
  });
  const ordersRelation = oneToMany({
    model: Order,
    relation: RELATION.orders,
  });

  // defined Model
  process.nextTick(() => {
    BankModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.image, {
        map: COLUMN.image,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.initialDeposit, {
        map: COLUMN.initialDeposit,
        optional: true,
      })
      .boolean(ATTRIBUTE.isVirtual, {
        map: COLUMN.isVirtual,
        optional: true,
        default: false,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(countryRelation)
      .mixin(bankBranchesRelation)
      .mixin(actionProcessStepsRelation)
      .mixin(agentsRelation)
      .mixin(bankHasCountriesRelation)
      .mixin(fileTemplatesRelation)
      .mixin(bankHasKeywordsRelation)
      .mixin(bankingProcessesRelation)
      .mixin(customersRelation)
      .mixin(ordersRelation)

      // table name
      .map(TABLE_NAME.BANK);
  });
});
