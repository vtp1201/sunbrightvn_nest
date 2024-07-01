import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/BankBranch';
import { deleted, oneToMany, oneToOne } from '../mixins';
import Bank from './Bank';
import BankingProcess from './BankingProcess';

export default createModel(MODEL_NAME.BANK_BRANCH, (BankBranchModel) => {
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
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: Bank,
    relation: RELATION.bank,
    option: { optional: true },
  });
  const bankingProcessesRelation = oneToMany({
    model: BankingProcess,
    relation: RELATION.bankingProcesses,
  });

  // defined Model
  process.nextTick(() => {
    BankBranchModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_200,
      })
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(bankRelation)
      .mixin(bankingProcessesRelation)

      // table name
      .map(TABLE_NAME.BANK_BRANCH);
  });
});
