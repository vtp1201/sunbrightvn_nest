import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ActionStepType';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { actionProcessStep, historyLogCDC, notificationTemplate } from './';

export default createModel(
  MODEL_NAME.ACTION_STEP_TYPE,
  (ActionStepTypeModel) => {
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

    // relations defined
    const actionProcessStepsRelation = oneToMany({
      model: actionProcessStep,
      relation: RELATION.actionProcessSteps,
    });
    const historyLogCDCsRelation = oneToMany({
      model: historyLogCDC,
      relation: RELATION.historyLogCDCs,
    });
    const notificationTemplatesRelation = oneToMany({
      model: notificationTemplate,
      relation: RELATION.notificationTemplates,
    });

    // defined Model
    process.nextTick(() => {
      ActionStepTypeModel.int(ATTRIBUTE.id, {
        map: COLUMN.id,
        id: true,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(actionProcessStepsRelation)
        .mixin(historyLogCDCsRelation)
        .mixin(notificationTemplatesRelation)

        // table name
        .map(TABLE_NAME.ACTION_STEP_TYPE);
    });
  },
);
