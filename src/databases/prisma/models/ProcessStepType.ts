import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ProcessStepType';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { processStep } from '.';

export default createModel(
  MODEL_NAME.PROCESS_STEP_TYPE,
  (ProcessStepTypeModel) => {
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

    // defined Relations
    const processStepsRelation = oneToMany({
      model: processStep,
      relation: RELATION.processSteps,
    });

    // defined Model
    process.nextTick(() => {
      ProcessStepTypeModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_255,
        })
        .boolean(ATTRIBUTE.isDashboard, {
          map: COLUMN.isDashboard,
          default: false,
        })
        .json(ATTRIBUTE.relationTypes, {
          map: COLUMN.relationTypes,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(processStepsRelation)

        // table name
        .map(TABLE_NAME.PROCESS_STEP_TYPE);
    });
  },
);
