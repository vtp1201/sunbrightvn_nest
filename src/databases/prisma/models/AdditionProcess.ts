import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/AdditionProcess';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import Task from './Task';
import Process from './Process';
import Billing from './Billing';
import Agent from './Agent';

export default createModel(
  MODEL_NAME.ADDITION_PROCESS,
  (AdditionProcessModel) => {
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
    const taskRelation = oneToOne({
      attribute: ATTRIBUTE.taskId,
      model: Task,
      relation: RELATION.task,
    });
    const processesRelation = oneToMany({
      model: Process,
      relation: RELATION.processes,
    });
    const billingsRelation = oneToMany({
      model: Billing,
      relation: RELATION.billings,
    });
    const agentsRelation = oneToMany({
      model: Agent,
      relation: RELATION.agents,
    });

    // defined Model
    process.nextTick(() => {
      AdditionProcessModel.int(ATTRIBUTE.id, {
        map: COLUMN.id,
        id: true,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.taskId, {
          map: COLUMN.taskId,
        })
        .string(ATTRIBUTE.trackingLink, {
          map: COLUMN.trackingLink,
          raw: RAW_STRING.LENGTH_200,
          optional: true,
        })
        .string(ATTRIBUTE.trackingLink, {
          map: COLUMN.trackingLink,
          raw: RAW_STRING.LENGTH_200,
          optional: true,
        })
        .json(ATTRIBUTE.serviceTypeIds, {
          map: COLUMN.serviceTypeIds,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(taskRelation)
        .mixin(processesRelation)
        .mixin(billingsRelation)
        .mixin(agentsRelation)

        // table name
        .map(TABLE_NAME.ADDITION_PROCESS);
    });
  },
);
