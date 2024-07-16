import { createModel } from 'schemix';

import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_NUMBER, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/ActionProcessStep';
import { actionStepType, bank, country, processStep, serviceType } from './';

export default createModel(MODEL_NAME.ACTION_PROCESS_STEP, (ActionProcessStepModel) => {
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

  const processStepParentRelation = oneToOne({
    attribute: ATTRIBUTE.processStepId,
    model: processStep,
    relation: RELATION.processStepParent,
    isNeedName: true,
    option: {
      map: INDEX_NAME.processStepId,
    },
  });
  const processStepChildrenRelation = oneToOne({
    attribute: ATTRIBUTE.nextProcessStepId,
    model: processStep,
    relation: RELATION.processStepChildren,
    isNeedName: true,
    option: {
      map: INDEX_NAME.nextProcessStepId,
    },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: {
      optional: true,
      map: INDEX_NAME.countryId,
    },
  });
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: bank,
    relation: RELATION.bank,
    option: {
      optional: true,
      map: INDEX_NAME.bankId,
    },
  });
  const serviceTypeRelation = oneToOne({
    attribute: ATTRIBUTE.serviceTypeId,
    model: serviceType,
    relation: RELATION.serviceType,
    option: {
      optional: true,
      map: INDEX_NAME.serviceTypeId,
    },
  });
  const actionStepTypeRelation = oneToOne({
    attribute: ATTRIBUTE.actionStepTypeId,
    model: actionStepType,
    relation: RELATION.actionStepType,
    option: {
      map: INDEX_NAME.actionStepTypeId,
    },
  });

  // defined Model
  process.nextTick(() => {
    ActionProcessStepModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
      })
      .int(ATTRIBUTE.nextProcessStepId, {
        map: COLUMN.nextProcessStepId,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
        optional: true,
      })
      .int(ATTRIBUTE.priority, {
        map: COLUMN.priority,
        optional: true,
        default: 1,
        raw: RAW_NUMBER.TINY_INT,
      })
      .int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.actionStepTypeId, {
        map: COLUMN.actionStepTypeId,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(processStepChildrenRelation)
      .mixin(processStepParentRelation)
      .mixin(countryRelation)
      .mixin(bankRelation)
      .mixin(serviceTypeRelation)
      .mixin(actionStepTypeRelation)

      // indexes
      .raw(INDEX.actionStepTypeId)
      .raw(INDEX.bankId)
      .raw(INDEX.countryId)
      .raw(INDEX.nextProcessStepId)
      .raw(INDEX.processStepId)
      .raw(INDEX.serviceTypeId)

      // table name
      .map(TABLE_NAME.ACTION_PROCESS_STEP);
  });
});
