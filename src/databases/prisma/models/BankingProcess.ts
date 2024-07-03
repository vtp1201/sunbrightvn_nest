import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/BankingProcess';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import { bank, bankBranch, country, task, Process, proposedTime } from './';

export default createModel(
  MODEL_NAME.BANKING_PROCESS,
  (BankingProcessModel) => {
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

    // defined Relation
    const bankRelation = oneToOne({
      attribute: ATTRIBUTE.bankId,
      model: bank,
      relation: RELATION.bank,
      option: { optional: true },
    });
    const bankBranchRelation = oneToOne({
      attribute: ATTRIBUTE.bankBranchId,
      model: bankBranch,
      relation: RELATION.bankBranch,
      option: { optional: true },
    });
    const phoneCountryRelation = oneToOne({
      attribute: ATTRIBUTE.phoneCountryId,
      model: country,
      relation: RELATION.phoneCountry,
      option: { optional: true },
    });
    const taskRelation = oneToOne({
      attribute: ATTRIBUTE.taskId,
      model: task,
      relation: RELATION.task,
      option: { optional: true },
    });
    const processesRelation = oneToMany({
      model: Process,
      relation: RELATION.processes,
    });
    const proposedTimesRelation = oneToMany({
      model: proposedTime,
      relation: RELATION.proposedTimes,
    });

    // defined Model
    process.nextTick(() => {
      BankingProcessModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.taskId, {
          map: COLUMN.taskId,
          optional: true,
        })
        .int(ATTRIBUTE.bankId, {
          map: COLUMN.bankId,
          optional: true,
        })
        .int(ATTRIBUTE.status, {
          map: COLUMN.status,
          optional: true,
          default: 0,
        })
        .bigInt(ATTRIBUTE.clientTime, {
          map: COLUMN.clientTime,
          optional: true,
        })
        .string(ATTRIBUTE.content, {
          map: COLUMN.content,
          raw: RAW_STRING.LENGTH_200,
        })
        .int(ATTRIBUTE.bankBranchId, {
          map: COLUMN.bankBranchId,
          optional: true,
        })
        .string(ATTRIBUTE.contactPerson, {
          map: COLUMN.contactPerson,
          raw: RAW_STRING.LENGTH_100,
          optional: true,
        })
        .string(ATTRIBUTE.titleJob, {
          map: COLUMN.titleJob,
          raw: RAW_STRING.LENGTH_100,
          optional: true,
        })
        .string(ATTRIBUTE.phone, {
          map: COLUMN.phone,
          raw: RAW_STRING.LENGTH_45,
          optional: true,
        })
        .string(ATTRIBUTE.applicationSetTrackingCode, {
          map: COLUMN.applicationSetTrackingCode,
          raw: RAW_STRING.LENGTH_100,
          optional: true,
        })
        .string(ATTRIBUTE.applicationFormTrackingCode, {
          map: COLUMN.applicationFormTrackingCode,
          raw: RAW_STRING.LENGTH_100,
          optional: true,
        })
        .string(ATTRIBUTE.urlVideo, {
          map: COLUMN.urlVideo,
          raw: RAW_STRING.LENGTH_100,
          optional: true,
        })
        .int(ATTRIBUTE.phoneCountryId, {
          map: COLUMN.phoneCountryId,
          optional: true,
        })
        .string(ATTRIBUTE.bankAddress, {
          map: COLUMN.bankAddress,
          raw: RAW_STRING.LENGTH_45,
          optional: true,
        })
        .string(ATTRIBUTE.contactPerson, {
          map: COLUMN.contactPerson,
          raw: RAW_STRING.TEXT,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(bankRelation)
        .mixin(bankBranchRelation)
        .mixin(phoneCountryRelation)
        .mixin(taskRelation)
        .mixin(processesRelation)
        .mixin(proposedTimesRelation)

        // table name
        .map(TABLE_NAME.BANKING_PROCESS);
    });
  },
);
