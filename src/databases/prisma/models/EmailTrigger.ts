import { createModel } from 'schemix';

import { emailTriggerHasProcess, processStep } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/EmailTrigger';

export default createModel(MODEL_NAME.EMAIL_TRIGGER, (EmailTriggerModel) => {
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
  const processStepRelation = oneToOne({
    attribute: ATTRIBUTE.processStepId,
    model: processStep,
    relation: RELATION.processStep,
    map: INDEX_NAME.processStepId,
    option: { optional: true },
  });
  const emailTriggerHasProcessesRelation = oneToMany({
    model: emailTriggerHasProcess,
    relation: RELATION.emailTriggerHasProcesses,
  });

  // defined Model
  process.nextTick(() => {
    EmailTriggerModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.type, {
        map: COLUMN.type,
        optional: true,
      })
      .json(ATTRIBUTE.serviceTypeIds, {
        map: COLUMN.serviceTypeIds,
        optional: true,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRemindAgent, {
        map: COLUMN.isRemindAgent,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(processStepRelation)
      .mixin(emailTriggerHasProcessesRelation)

      // indexes
      .raw(INDEX.processStepId)

      // table name
      .map(TABLE_NAME.EMAIL_TRIGGER);
  });
});
